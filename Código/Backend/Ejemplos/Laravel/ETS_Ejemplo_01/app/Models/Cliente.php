<?php

namespace App\Models;

//Permite manejar los atributos de tabla
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;


#[Table('clientes', key:'ci', keyType:'int', incrementing:'false')]
#[Fillable(['ci', 'nombre', 'apellido', 'direccion'])]
class Cliente extends Model
{
    //
}
