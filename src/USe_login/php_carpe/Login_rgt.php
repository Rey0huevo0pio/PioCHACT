<?php
include 'base_log.php';

// Manejar la solicitud de registro
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = password_hash($data->password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO Usuarioss (nombre_usuario, contrasena) VALUES (?, ?)");
if ($stmt->execute([$username, $password])) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error al registrar el usuario']);
}
?>
