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
        Schema::create('pendapatan_tenants', function (Blueprint $table) {
            $table->id('IDpendapatan');
            $table->bigInteger('IDtenant');
            $table->date('tanggal');
            $table->bigInteger('totalPendapatan');
            $table->bigInteger('setoranTenant');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendapatan_tenants');
    }
};
