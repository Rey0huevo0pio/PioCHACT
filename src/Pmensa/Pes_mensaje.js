import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

import dotenv from 'dotenv'
import mysql from 'mysql2/promise'


const port = process.env.port ?? 3000
const app = express()
const server= createServer(app)
const io= new Server(server,{
    connectionStateRecovery:{}
})
const initDB = async()=>{
    try{
        const connection=await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mi_registro',
            port:'3306'
        });
        console.log('conexion exitosa a la base de dato');
        return connection;
    }catch (Err){
        console.error('Error en la conexion', Err);
        throw Err;
    }
};
const db=await initDB();

await db.execute(`
   CREATE TABLE IF NOT EXISTS messages(
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   content TEXT,
   user TEXT
   );
    `);

/////////////
io.on('connection', (socket) => {
    console.log('A user has connected!');

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    });
    socket.on('chat message', async (msg) => {
        let result
        const username = socket.handshake.auth.username || 'anonymous';
        console.log({username})
        try {

            const [result] = await db.execute(
                'INSERT INTO messages (content, user) VALUES (?,?)',
               [msg,username]// Usa placeholders para evitar SQL injection
            );
            io.emit('chat message', msg, result.insertId.toString(), username);
        } catch (e) {
            console.error(e);
        }
    });

    if (!socket.recovered) {
        (async () => {
            try {
                const [result] = await db.execute('SELECT id, content, user FROM messages WHERE id > ?', [socket.handshake.auth.serverOffset ?? 0]);
                result.forEach(row => {
                    socket.emit('chat message', row.content, row.id.toString(), row.user);
                });
            } catch (e) {
                console.error(e);
            }
        })();
    }
});





app.use(logger('dev'))

 app.get('/', (req, res)=>{
  res.sendFile(process.cwd ()+ '/src/Pmensa/mensa.html')
 })

 server.listen(port, ()=>{
  console.log(`server running on port ${port}`)
  
 })
