<?php

namespace Database\Seeders;

use App\Models\Cart;
use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{

    public function run(): void
    {
        // Create 15 random cart items using factory
        \App\Models\Cart::factory(15)->create();
    }
} 