<?php
namespace Frutas;

include 'clases.php';

use Frutas\Fruta;

class Frutita extends Fruta{}
$manzana = new Fruta("Manzana","roja");
// $manzana->nombre = "Manzana";
// $manzana->color = "roja roja";
$manzana->ver_datos();