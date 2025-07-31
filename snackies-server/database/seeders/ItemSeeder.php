<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{

    public function run(): void
    {
        // Cheese category (category_ID = 1)
        Item::create([
            'CATEGORY_ID' => 1,
            'name' => 'Cheese Crackers',
            'description' => 'Crispy cheese-flavored crackers',
            'price' => 2.99,
            'image' => 'items/cheese-crackers.jpg',
            'stock' => 60,
        ]);

        Item::create([
            'CATEGORY_ID' => 1,
            'name' => 'Cheese Puffs',
            'description' => 'Light and airy cheese puffs',
            'price' => 3.49,
            'image' => 'items/cheese-puffs.jpg',
            'stock' => 45,
        ]);

        Item::create([
            'CATEGORY_ID' => 1,
            'name' => 'Cheese Sticks',
            'description' => 'Crunchy cheese snack sticks',
            'price' => 2.79,
            'image' => 'items/cheese-sticks.jpg',
            'stock' => 55,
        ]);

        // Chocolatey category (category_ID = 2)
        Item::create([
            'CATEGORY_ID' => 2,
            'name' => 'Dark Chocolate Bar',
            'description' => 'Rich 70% dark chocolate bar',
            'price' => 3.99,
            'image' => 'items/dark-chocolate.jpg',
            'stock' => 70,
        ]);

        Item::create([
            'CATEGORY_ID' => 2,
            'name' => 'Chocolate Cookies',
            'description' => 'Soft chocolate chip cookies',
            'price' => 2.49,
            'image' => 'items/chocolate-cookies.jpg',
            'stock' => 80,
        ]);

        Item::create([
            'CATEGORY_ID' => 2,
            'name' => 'Chocolate Truffles',
            'description' => 'Luxury chocolate truffles',
            'price' => 4.99,
            'image' => 'items/chocolate-truffles.jpg',
            'stock' => 40,
        ]);

        // Nutty category (category_ID = 3)
        Item::create([
            'CATEGORY_ID' => 3,
            'name' => 'Roasted Almonds',
            'description' => 'Premium roasted almonds',
            'price' => 5.99,
            'image' => 'items/almonds.jpg',
            'stock' => 50,
        ]);

        Item::create([
            'CATEGORY_ID' => 3,
            'name' => 'Salted Cashews',
            'description' => 'Delicious salted cashews',
            'price' => 6.49,
            'image' => 'items/cashews.jpg',
            'stock' => 45,
        ]);

        Item::create([
            'CATEGORY_ID' => 3,
            'name' => 'Mixed Nuts',
            'description' => 'Premium mixed nuts assortment',
            'price' => 7.99,
            'image' => 'items/mixed-nuts.jpg',
            'stock' => 35,
        ]);
    }
} 