<?php
require_once 'config/database.php';
require_once 'api/auth.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");

$database = new Database();
$db = $database->connect();
$auth = new Auth($db);

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);

if ($uri === '/register' && $method === 'POST') {
    echo json_encode($auth->register($data['username'], $data['email'], $data['password']));
} elseif ($uri === '/login' && $method === 'POST') {
    echo json_encode($auth->login($data['email'], $data['password']));
} else {
    echo json_encode(['error' => 'Endpoint not found']);
}
