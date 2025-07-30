<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{

    public function run(): void
    {
        // Create 8 random orders using factory
        \App\Models\Order::factory(8)->create();
    }
} 