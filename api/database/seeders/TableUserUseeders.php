<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TableUserUseeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'username' => 'admin',
            'role' => 'admin',
            'password' => bcrypt('password')
        ]);
        User::create([
            'username' => 'kasir',
            'role' => 'kasir',
            'password' => bcrypt('password')
        ]);
    }
}
