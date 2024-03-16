<?php

    if($_SERVER['REQUEST_METHOD'] == "POST") {
        $nombre = $_POST['nom'];
        $apellido = $_POST['ape'];

        echo 'Hola '.$nombre.' '.$apellido;
    }

?>