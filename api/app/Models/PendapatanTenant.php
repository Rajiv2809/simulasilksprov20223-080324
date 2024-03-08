<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendapatanTenant extends Model
{
    use HasFactory;

    protected $primaryKey = 'IDpendapatan';
    protected $fillable = [
        'tanggal' , 'totalPendapatan', 'setoranTenant', 'IDtenant'
    ];
}
