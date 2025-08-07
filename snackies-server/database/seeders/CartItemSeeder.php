<?php

namespace Database\Seeders;

use App\Models\CartItem;
use Illuminate\Database\Seeder;

class CartItemSeeder extends Seeder
{

    public function run(): void
    {
        CartItem::factory(20)->create();
    }
} 