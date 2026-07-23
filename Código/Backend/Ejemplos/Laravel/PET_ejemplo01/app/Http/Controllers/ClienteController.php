<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{

    public function buscar(int $ci){
        $resultado = Cliente::find($ci,'*');

        if(! $resultado){
            return response()->json(
            [
                'status'=>'error',
                'message'=>'Cliente no encontrado'
            ]    
            ,404);
        }

        return response()->json($resultado, 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientes = Cliente::all();
        return response()->json($clientes, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //1 - Validación de datos
        $datosValidados = $request->validate([
            'ci'=>'required|integer|digits:8|unique:clientes,ci',
            'nombre'=>'required|string|max:50',
            'apellido'=>'required|string|max:50',
            'direccion'=>'required|string|max:150'
        ]);

        $cliente = Cliente::create($datosValidados);

        return response()->json([
            'status'=>'success',
            'message'=>'Cliente añadido con éxito',
            'data' => $cliente,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cliente $cliente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cliente $cliente)
    {
        //
    }
}
