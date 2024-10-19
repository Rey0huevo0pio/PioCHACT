<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");

// Permitir métodos específicos (POST en este caso)
header("Access-Control-Allow-Methods: POST");

// Permitir encabezados específicos (Content-Type, etc.)
header("Access-Control-Allow-Headers: Content-Type");

// Manejar la solicitud OPTIONS preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Configuración de conexión a la base de datos
$host = 'localhost'; // Cambia si tu servidor de base de datos no está en localhost
$db = 'mi_registro';
$user = 'root'; // Cambia según tu configuración
$pass = ''; // Cambia según tu configuración

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
}
?>
