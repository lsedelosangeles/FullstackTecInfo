<?php

namespace Database\Factories;

use App\Models\Cliente;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Cliente>
 */
class ClienteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ci' => fake()->unique()->randomNumber(8, strict: true),
            'nombre' => fake('es_ES')->firstName(),
            'apellido' => fake('es_ES')->lastName(),
            'direccion' => fake('es_ES')->address()
            //
        ];
    }
}
