<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Feria Tristán Narvaja</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- JQuery, Popper, Bootstrap -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  
  <!-- Simple Fade Slide Show -->
  <script src="./assets/vendor/simple-fade-slide-show/fadeSlideShow.js"></script>

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- FontAwesome -->
  <script src="https://kit.fontawesome.com/3acfa00924.js" crossorigin="anonymous"></script>

  <!-- Script App -->
  <!--
    <script src="./assets/js/arrays/array_menu.js" defer></script>
    <script src="./assets/js/arrays/array_slide.js" defer></script>
    <script src="./assets/js/arrays/array_categorias.js" defer></script>
  -->
  <script src="./assets/js/main-feria.js" defer></script>
</head>

<body>    
  <!--
    <div class="category" style="z-index:2222;position:fixed;right:-6px;top:20%;">
    <div class="links-wrap">
      <div class="toggle"><i class="fa"></i></div>
        <div class="links">
            <a href="#"><i class="fa fa-plus"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-mail-reply"></i></a>
        </div>
    </div>
  </div>
  -->
  <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="container-fluid" id="cajaMenuVer">
        <div class="row">
          <div id="menu-caja-1" class="col-4 text-white p-0">
            <video muted pause>
              <source src="./assets/video/main.m4v">
            </video>
            <p class="titulo-caja-menu py-1 text-center">Links Principales</p>
            <div class="px-5">
              <h6><a href="./main.html">INICIO</a></h6>
              <h6><a href="#">EXPLORÁ LOS PUESTOS</a></h6>
              <h6><a href="#">MAPA DE LA FERIA</a></h6>
              <h6><a href="#">CÓMO LLEGAR</a></h6>
              <h6><a href="#">FAQs</a></h6>
            </div>
          </div>
          <div id="menu-caja-2" class="col-4 text-white p-0">
            <video muted pause>
              <source src="./assets/video/main.m4v">
            </video>
            <p class="titulo-caja-menu py-1 text-center">Paseo de la Feria</p>
            <div class="px-5">
              <h5>Gastronomía</h5>
              <ul>
                <li><a href="#">Restaurantes</a></li>
                <li><a href="#">Comida de paso</a></li>
              </ul>
              <h5>Zona artística</h5>
              <ul>
                <li><a href="#">Música en vivo</a></li>
                <li><a href="#">Artistas callejeros</a></li>
              </ul>
            </div>
          </div>
          <div id="menu-caja-3" class="col-4 text-white p-0">
            <video muted pause>
              <source src="./assets/video/main.m4v">
            </video>
            <p class="titulo-caja-menu py-1 text-center">Wiki-Feria</p>
            <div class="px-5">
              <h5>Sección 1</h5>
              <ul>
                <li><a href="./origen_feria.html" target="contenedor_páginas">Origen de la feria</a></li>
                <li><a href="#">Subsección 1-2</a></li>
              </ul>
              <h5>Sección 2</h5>
              <ul>
                <li><a href="#">Subsección 2-1</a></li>
                <li><a href="#">Subsección 2-2</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-dark" style="justify-content:left!important;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style="outline:none;">
        <i class="fas fa-bars" style="color:black;font-size:2rem;"></i>
      </button>
      <img src="./assets/img/logo_feria.png" style="width:12rem;" alt="">
    </nav>
  </div>
  <div id="contenedor_paginas" style="width:100%;height:100%;display:block;">
    <?php include './main.html'; ?>
  </div>
  <!-- FOOTER -->
  
  <footer class="text-center text-dark py-2 w-100" style="background-color:white;">
  </div>
    <div style="font-size:0.8vw;">
        <div style="display:inline-block;">
        &copy;
        <strong>
          <span>
            Feria Tristán
          </span>
          <span style="font-size: 0.8rem;">
            150 años
          </span>
        </strong>
        </div>
        <div style="font-size:0.6rem;">
          Desarrollado con&nbsp;&nbsp;<i class="fas fa-heart"></i>&nbsp;&nbsp;por <a href="#" style="color:orange;">LasagnaTech</a>
        </div>

    </div>
  </footer><!-- END FOOTER -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main_plantilla.js"></script>

</body>

</html>