<?php
session_start();
var_dump($_SESSION['loggedIn']);

if($_SESSION['loggedIn'] && $_SESSION['isAdmin']){
  echo '<h1>You are logged in,' . $_SESSION['username'] . '!</h1>';
  include 'adminBar.php';
}else{
  echo '<h1>NEJJEJEJEJEJ!</h1>';
}


include 'error.php';
include 'database.php';

//Create password
$hash = password_hash('passy', PASSWORD_DEFAULT);

//Login,verify password
if (password_verify('passy', $hash)) { 
 $_SESSION['loggedIn'] = true;
 $_SESSION['username'] = "Jesper";
} else { 
 echo "Liar"; 
}


$pass = password_hash('strongpass2000', PASSWORD_DEFAULT);

$statement = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
$statement->execute([
  ":username" => $_POST['username'],
  ":password" => $pass
]);



function user_exists(){

  $statement2 = $pdo->prepare("
    SELECT * FROM users 
    WHERE username = :username");

  $statement2->execute([
    ":username" => $_POST['username']
  ]);

  return $statement2->fetch();

}
















