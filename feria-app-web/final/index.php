<!DOCTYPE html>
<html lang="en">

<head>
  <?php include 'head.html'; ?>
</head>

<body style="background-image: url('./assets/img/mainIndex.jpg');background-size: cover;">    
  
  <?php 
    include 'menu.html';
    include './paginas/mainInfo.html';
  ?>
  
  <div id="cajaPaginas" style="width:100%;height:100%;display:block;">
    <?php include './paginas/main.html'; ?>
  </div>
  
  <?php include 'footer.html'; ?>
  <?php include 'foot.html'; ?>
</body>

</html>