<?php session_start(); ?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FORM</title>
  <style>
    html{
      height: 100%;
    }
    body{
      height: 100%;
      background-color: #D7816A;
      color: #fff;
      font: 150%/1.5 'Fira Code', monospace;
      display: flex;
      justify-content: center;
      align-items:center;
      text-shadow: 5px 5px 0px #B06A57;
    }
  </style>
</head>
<body>
  
  <form action="post.php" method="POST">
    <input type="text" name="username">
    <input type="submit">
  </form>

</body>
</html>






