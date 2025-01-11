<?php
// Database connection settings
$host = 'localhost'; // Database host
$db_name = 'solvex'; // Name of your database
$username = 'root'; // Database username
$password = ''; // Database password (empty for XAMPP/LAMP default)
$charset = 'utf8mb4';

// Data Source Name (DSN)
$dsn = "mysql:host=$host;dbname=$db_name;charset=$charset";

// PDO options for better error handling
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw exceptions on errors
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch associative arrays by default
    PDO::ATTR_EMULATE_PREPARES   => false,                  // Use real prepared statements
];

try {
    // Create a new PDO instance
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    // If connection fails, output the error
    die('Database Connection Failed: ' . $e->getMessage());
}
