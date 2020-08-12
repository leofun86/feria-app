<?php
    //if (isset($_GET['tipo'])) {
        header('Access-Control-Allow-Origin: *');
        require 'conexion.php';
        
        //$tipo=$_GET['tipo'];
        $correo = $_POST['correo'];
        $password = $_POST['password'];
        
        echo $tipo;
        echo $correo;
        echo $password;

        //$mysqli->set_charset('utf8');
        
        /*switch($tipo) {
        case 'comerciante':
            
        break;
        case 'visitante':
            $new_request=$mysqli->prepare("SELECT correo FROM visitante where correo='".$mail."'");
        break;
        }*/
        $sql="SELECT * FROM comerciante WHERE correo='".$correo."' AND contrasenia='".$password."'";
        $result = $mysqli->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo json_encode('error');
            }
        } else {
            echo json_encode('Correcto: Chaucha');
        }
        $mysqli->close();
    //}
?>