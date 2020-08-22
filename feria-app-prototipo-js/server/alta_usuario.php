<?php
    header('Access-Control-Allow-Origin: *');
    require 'conexion.php';

    $json_datos = json_decode(file_get_contents("php://input"));

    if (isset($_GET['tipo'])) {
        $tipo=$_GET['tipo'];

        switch($tipo) {
            case 'comerciante':
                $mysqli->query('INSERT INTO comerciante (ci, contrasenia, correo) values (
                    '.$json_datos->ci.',
                    "'.$json_datos->password.'",
                    "'.$json_datos->correo.'"
                )');
            break;
            case 'visitante':
                $mysqli->query('INSERT INTO visitante (ci, contrasenia, correo) values (
                    '.$json_datos->ci.',
                    "'.$json_datos->password.'",
                    "'.$json_datos->correo.'"
                )');
            break;
        }
    }

    /*
    $mysqli->query('INSERT INTO puesto (ci_comerciante, nombre, tipo, calle, numero, extra_calle, categoria, subcategoria) values (
        "'.$json_datos->ci.'",
        "'.$json_datos->nombre_puesto.'",
        "'.$json_datos->tipo.'",
        "'.$json_datos->calle.'",
        '.$json_datos->numero.',
        "'.$json_datos->extra_calle.'",
        "'.$json_datos->categoria.'",
        "'.$json_datos->sub_categoria.'"
    )');
    */

    header('Location: ../pruebas.html');
    $mysqli->close();
?>