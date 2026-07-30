<?php
namespace Frutas;

//echo("Esta es la clase Frutas");

class Fruta{
    public $nombre;
    public $color;

    public function __construct($nombre, $color)
    {
        $this->nombre = $nombre;
        $this->color = $color;
    }

    function ver_datos(){
        echo("Esto es: $this->nombre. De color: $this->color");
    }
}

class Verdura{

}