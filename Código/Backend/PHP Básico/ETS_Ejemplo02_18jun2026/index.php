<?php
$nombre = "Fulano";
$edad = 6;
echo("$nombre");
echo("<br>");

if ($edad > 10) {
    echo("Es mayor que 10");
}
elseif ($edad > 5) {
    echo("Es mayor que 5");
}
else{
    echo("No es mayor que 10");
}

$nombres = [];
array_push($nombres, "Jorge", "Carla", "Juanito");
echo("<br>");

array_push($nombres, 250);

var_dump($nombres);
echo("<br>");

$nombres['perro']="chicho";

var_dump($nombres);
echo("<br>");

foreach ($nombres as $dato) {
    echo("- $dato");
    echo("<br>");
}

echo("<hr>");
foreach ($nombres as $clave=>$valor) {
    echo("$clave- $valor");
    echo("<br>");
}