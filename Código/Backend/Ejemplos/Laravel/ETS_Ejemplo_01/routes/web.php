<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

Route::get('/clientes',
        [ClienteController::class, 'verTodos']
);

Route::get(
    '/cliente/ci/{ci}',
    [ClienteController::class, 'buscar']
);

// Agregar un nuevo cliente
Route::post('/clientes', [ClienteController::class, 'store']);

Route::get(
    '/cliente/nuevo',
    function(){
        return view('formularioClientes');
    }
);

require __DIR__.'/settings.php';
