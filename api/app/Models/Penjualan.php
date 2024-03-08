<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    use HasFactory;
    protected $primaryKey = 'IDTrans';
    protected $fillable = [
        'IDproduk', 'hargajual',  'qty', 'total', 'dibayar', 'kembali','tanggal'
    ];

    public function stok(){
        $this->belongsTo(Stok::class);
    }

}
