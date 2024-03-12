<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PendapatanTenantController;
use App\Http\Controllers\PenjualanController;
use App\Http\Controllers\StokController;
use App\Http\Controllers\TenantController;
use App\Http\Middleware\AuthenticateToken;
use App\Models\PendapatanTenant;
use App\Models\Stok;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware([AuthenticateToken::class])->prefix('/v1')->group(function () {
    
    Route::get('/me', [AuthController::class, 'me']);

    Route::get('/kwitansi/{id}', [PendapatanTenantController::class, 'kwitansi']);
    Route::get('/struk/{id}', [PenjualanController::class, 'struk']);

    Route::post('/stok', [StokController::class, 'addData']);
    Route::get('/stok', [StokController::class, 'alldata']);
    Route::get('/stok/{id}', [StokController::class, 'getData']);
    
    Route::post('/penjualan', [PenjualanController::class, 'addData']);
    Route::get('/penjualan', [PenjualanController::class, 'alldata']);
    Route::get('/penjualan/{id}', [PenjualanController::class, 'getData']);
    
    Route::get('/tenant', [TenantController::class, 'alldata']);
    Route::get('/tenant/{id}', [TenantController::class, 'getData']);
    
    Route::post('/pendapatan', [PendapatanTenantController::class, 'addData']);
    Route::get('/pendapatan', [PendapatanTenantController::class, 'alldata']);
    Route::get('/pendapatan/{id}', [PendapatanTenantController::class, 'getData']);
    
    Route::middleware([AuthenticateToken::class])->group( function () {
        Route::post('/stok/{id}',  [StokController::class, 'updateData']);
        Route::delete('/stok/{id}',  [StokController::class, 'deleteData']);
        
        Route::post('/penjualan/{id}',  [PenjualanController::class, 'updateData']);
        Route::delete('/penjualan/{id}',  [PenjualanController::class, 'deleteData']);
        
        
        Route::post('/tenant/{id}',  [TenantController::class, 'updateData']);
        Route::delete('/tenant/{id}',  [TenantController::class, 'deleteData']);
        Route::post('/tenant', [TenantController::class, 'addData']);
        
        Route::post('/pendapatan/{id}',  [PendapatanTenantController::class, 'updateData']);
        Route::delete('/pendapatan/{id}',  [PendapatanTenantController::class, 'deleteData']);
        
        
    });
    
});




Route::prefix('/v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::get('/logout', [AuthController::class, 'logout'])->middleware(AuthenticateToken::class);
    });
});
