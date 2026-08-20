<?php

use App\Http\Controllers\ClienteController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    //Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

Route::get(
    '/clientes',
    [ClienteController::class,'index']
);

Route::get(
    '/cliente/ci/{ci}',
    [ClienteController::class,'buscar']
);


Route::get(
    '/nuevo/cliente',
    function(){
        return view('nuevoCliente');
    }
);

Route::post(
    '/cliente/nuevo',
    [ClienteController::class,'store']
);

require __DIR__.'/settings.php';
