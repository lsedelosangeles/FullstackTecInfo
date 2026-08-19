<?php

namespace Database\Seeders;

use App\Models\Cliente;
use App\Models\Pedido;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@correo.com',
            'password' => Hash::make('admin'),
            'rol_boolean' => true,
        ]);


        Cliente::factory()
            ->count(10)
            ->has(
                Pedido::factory()
                ->count(3)
            ,'pedidos')
            ->create();
    }
}
