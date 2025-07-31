<?php

namespace Database\Seeders;

use App\Models\Cart;
use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{

    public function run(): void
    {
        // User 2 (ali) cart items
        Cart::create([
            'user_ID' => 2,
            'item_ID' => 1, // Cheese Crackers
            'quantity' => 2,
        ]);

        Cart::create([
            'user_ID' => 2,
            'item_ID' => 4, // Dark Chocolate Bar
            'quantity' => 1,
        ]);

        // User 3 (christ) cart items
        Cart::create([
            'user_ID' => 3,
            'item_ID' => 5, // Chocolate Cookies
            'quantity' => 3,
        ]);

        Cart::create([
            'user_ID' => 3,
            'item_ID' => 7, // Roasted Almonds
            'quantity' => 1,
        ]);

        // User 4 (kevo) cart items
        Cart::create([
            'user_ID' => 4,
            'item_ID' => 8, // Salted Cashews
            'quantity' => 1,
        ]);

        Cart::create([
            'user_ID' => 4,
            'item_ID' => 2, // Cheese Puffs
            'quantity' => 2,
        ]);

        // User 5 (Alice) cart items
        Cart::create([
            'user_ID' => 5,
            'item_ID' => 9, // Mixed Nuts
            'quantity' => 1,
        ]);

        Cart::create([
            'user_ID' => 5,
            'item_ID' => 3, // Cheese Sticks
            'quantity' => 2,
        ]);
    }
} 