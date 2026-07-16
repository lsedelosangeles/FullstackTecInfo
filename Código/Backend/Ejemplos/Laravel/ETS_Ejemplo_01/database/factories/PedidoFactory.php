<?php

namespace Database\Factories;

use App\Models\Cliente;
use App\Models\Pedido;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Pedido>
 */
class PedidoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'descripcion' => fake('ES-es')->sentence(10),
            'estado' => fake()->randomElement(['activo','procesando','entregado','cancelado']),
            'cliente_ci' => Cliente::factory()
        ];
    }
}
