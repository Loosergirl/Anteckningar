<?php

function user_exists(){

  require 'database.php';
  $statement = $pdo->prepare("
    SELECT * FROM users 
    WHERE username = :username");

  $statement->execute([
    ":username" => $_POST['username']
  ]);

  return $statement->fetch();

}

var_dump(user_exists());