<?php
    header('Access-Control-Allow-Origin: *');
    require 'conexion.php';

    $json_datos = json_decode(file_get_contents("php://input"));

    $mysqli->query('INSERT INTO comerciante (ci, contrasenia, nombre, apellido, sexo, correo) values (
        "'.$json_datos->ci.'",
        "'.$json_datos->password.'",
        "'.$json_datos->nombre.'",
        "'.$json_datos->apellido.'",
        "'.$json_datos->sexo.'",
        "'.$json_datos->correo.'"
    )');

    //$json_cliente = json_decode(file_get_contents("php://input"));
        
    //$mysqli->query("INSERT INTO clientes (ci, nombre, correo, celular) values ($json_cliente->ci, '$json_cliente->nombre', '$json_cliente->correo', '$json_cliente->celular' )");
    header('Location: ../pruebas.html');
    $mysqli->close();
?>