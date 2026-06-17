<?php 

    $lista = ["uno", "dos", "tres"];

    $lista2 = [
        "perro"=>"Chocolate",
        "gato"=>"Milanesa",
        "lorito"=>"Pepe"
    ];

    $usuario = [
        'id'=>3426,
        'nombre'=>'Fulano',
        'apellido'=>'de Tal'
    ];

    foreach ($lista as $elemento) {
        echo("$elemento");
        echo("<br>");
    }

    echo("<hr>");
    foreach ($usuario as $clave => $valor) {
        echo("$clave: $valor");
        echo("<br>");
    }
    echo("<hr>");

    echo("$usuario[id]");

