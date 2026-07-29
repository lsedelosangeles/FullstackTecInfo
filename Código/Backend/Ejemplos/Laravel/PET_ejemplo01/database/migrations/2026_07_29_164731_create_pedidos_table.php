<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('descripcion',250);
            $table->
            enum('estado',
                ['activo','procesado','entregado','cancelado'])
                ->default('activo');

            $table->bigInteger('cliente_ci');
            $table->foreign('cliente_ci')
                ->references('ci')
                ->on('clientes')
                ->noActionOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
