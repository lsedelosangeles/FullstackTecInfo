<?php

echo("Hola Chicos");
$nombre = "Fulano";

echo("<br>");
echo("Hola, $nombre");

$nombres = array();
array_push($nombres, "Pepito", 25);
array_push($nombres, $nombres);
echo("<br>");
var_dump($nombres);