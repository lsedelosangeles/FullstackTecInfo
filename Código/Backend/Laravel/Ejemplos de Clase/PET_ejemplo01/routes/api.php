<?php

use App\Http\Controllers\ClienteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get(
    '/clientes',
    [ClienteController::class,'index']
)->middleware('auth');


Route::post('/login2',
    function(Request $request){
        if ($request->has('email')) {
            return response()->json([$request->all()],200);
        }
    }
);