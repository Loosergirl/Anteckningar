<?php include 'partials/header.php'; ?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<?php include 'functions/curl.php'; ?>

<header class="container-fluid text-center m-5">
	<h1 class="text-muted">Chuck Norris Quote</h1>
</header>
<section class="container">
          <?php echo $response; ?> 
</section>

<?php include 'partials/footer.php'; ?>