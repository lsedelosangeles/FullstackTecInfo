<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Illuminate\Http\JsonResponse;

class ClienteController extends Controller
{
    //
    public function buscar(int $ci){
        $cliente = Cliente::with('pedidos')->find($ci);//find($ci);

        if (!$cliente) {
            return response()->json([
                'status' => 'error',
                'message' => 'Cliente no encontrado'
            ], 404);
        }

        return response()->json($cliente, 200);
    }

    /**
     * Muestra todos los clientes registrados
     */
    public function verTodos(){
        $clientes = Cliente::with('pedidos')->get();//all();
        return response()->json($clientes, 200);
    }


    public function store(Request $request): JsonResponse
    {
        // Validamos los datos de entrada
        $datosValidados = $request->validate([
            'ci' => 'required|integer|digits:8|unique:clientes,ci',
            'nombre' => 'required|string|max:100',
            'apellido' => 'required|string|max:100',
            'direccion' => 'required|string|max:255',
        ]);

        // Creación masiva segura gracias al atributo #[Fillable] en el modelo
        $cliente = Cliente::create($datosValidados);

        return response()->json([
            'status' => 'success',
            'message' => 'Cliente registrado correctamente',
            'data' => $cliente
        ], 201); // 201 es el código HTTP semántico correcto para "Creado con éxito"
    }

}
