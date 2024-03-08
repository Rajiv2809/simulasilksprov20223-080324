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
        Schema::create('penjualans', function (Blueprint $table) {
            $table->id('IDTrans');
            $table->BigInteger('IDproduk');
            $table->bigInteger('hargajual');
            $table->bigInteger('qty');
            $table->bigInteger('total');
            $table->bigInteger('dibayar');
            $table->bigInteger('kembali');
            $table->date('tanggal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penjualans');
    }
};
