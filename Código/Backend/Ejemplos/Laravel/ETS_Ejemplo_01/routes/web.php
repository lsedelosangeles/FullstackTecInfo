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

require __DIR__.'/settings.php';
