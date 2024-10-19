import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Conectar al puerto correcto
const socket = io('http://localhost:3001/'); // Cambiar puerto a 3001

const En_mensa = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Escuchar mensajes
    socket.on('message', (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    // Limpiar el socket al desmontar el componente
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    // Emitir el mensaje al servidor
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default En_mensa;
