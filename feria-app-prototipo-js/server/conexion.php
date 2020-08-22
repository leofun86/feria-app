<?php
    $mysqli = new mysqli('localhost', 'root', '', 'feria_app_bd');
    if ($mysqli->connect_errno) { echo 'Ha habido un error =>'.$mysqli->connect_error; }
?>