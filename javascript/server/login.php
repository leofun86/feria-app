<?php
    require '../conexion.php';
    
    if (isset($_GET['ci'])) { $ci=$_POST['email']; }
    if (isset($_GET['mail'])) { $mail=$_POST['passwrod']; }
    
    $mysqli->set_charset('utf8');
    
    switch($op) {
    case 1:
        $new_request=$mysqli->prepare("SELECT ci FROM clientes where ci=$ci");
    break;
    case 2:
        $new_request=$mysqli->prepare("SELECT correo FROM clientes where correo='".$mail."'");
    break;
    }
    $new_request->execute();
    $result = $new_request->get_result();
    if ($result->num_rows == 1) { echo 1; } else { echo 0; }
    $new_request->close();
    $mysqli->close();
?>