<?php

namespace App\Models;

//Permite manejar los atributos de tabla
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Table('clientes', key:'ci', keyType:'int', incrementing:'false')]
#[Fillable(['ci', 'nombre', 'apellido', 'direccion'])]
class Cliente extends Model
{
    //
    use HasFactory;

    public function pedidos():HasMany
    {
        return $this->hasMany(Pedido::class, 'cliente_ci', 'ci');
    }
}
