<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Fillable;


#[Table('clientes', key:'ci', keyType:'int', incrementing:'false')]
// nombre de la tabla, campo principal, tipo del campo principal, si es incremental
#[Fillable(['ci','nombre','apellido','direccion'])]
// campos a rellenar para un registro nuevo
class Cliente extends Model
{
    /** @use HasFactory<\Database\Factories\ClienteFactory> */
    use HasFactory;

}
