<?php include 'partials/header.php'; ?>
<?php include 'functions/curl.php' ?>
    
  <header class="container-fluid text-center m-5">
    <h1 class="text-muted">Quotes or whatever</h1>
  </header>

  <section class="container">
    <div class="row" id="content">
     <?php foreach($data as $whatever) : ?>
          <?php include 'partials/card.php'; ?> 
       <?php endforeach; ?>  
    </div>
  </section> 


<?php include 'partials/footer.php'; ?>