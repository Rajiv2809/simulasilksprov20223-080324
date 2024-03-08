<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;
    protected $primaryKey = 'IDtenant';
    protected $fillable = [
        'namaTenant', 'detail'
    ];
    public function pendapatan( ){
        $this->hasMany([PendapatanTenant::class]);
    }
}
