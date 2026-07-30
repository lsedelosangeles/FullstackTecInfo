<?php

$nombre = "Fulanito";
var_dump($nombre);
echo("<br>");

$nombre = 25;
var_dump($nombre);
echo("<br>");

$nombres = [23,24,25,"zanahoria"];

var_dump($nombres);
echo("<br>");

$usuario = [
    'nombre'=>'pepito',
    'edad'=>45
];

var_dump($usuario);
echo("<br>");
echo("$usuario[nombre]");
echo("<br>");

if ($usuario['edad'] > 18) {
    echo("$usuario[nombre] es mayor de edad");
}

foreach ($usuario as $clave=>$elemento) {
    echo("<br>");
    echo("$clave : $elemento");
}

