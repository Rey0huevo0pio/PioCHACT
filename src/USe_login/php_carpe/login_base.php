<?php
session_start(); // Inicia la sesión
include 'base_log.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username ?? null; // Asegúrate de que tenga un valor
$password = $data->password ?? null;

if (!$username || !$password) {
    echo json_encode(['status' => 'error', 'message' => 'Please fill in all fields']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM Usuarioss WHERE namuser = ?");
$stmt->execute([$username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['contra'])) {
    $_SESSION['user'] = $username; // Guardar el usuario en la sesión
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
}
?>
