<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    //
    public function buscar($ci){

    }

    public function verTodos(){
        foreach(Cliente::all() as $cliente){
            echo($cliente->nombre);
        }
    }
}
