<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{

    public function run(): void
    {
        Category::create([
            'name' => 'Cheese',
            'description' => 'Delicious cheese snacks and treats',
            'image' => 'categories/cheese.jpg',
        ]);

        Category::create([
            'name' => 'Chocolatey',
            'description' => 'Sweet chocolate treats and candies',
            'image' => 'categories/chocolatey.jpg',
        ]);

        Category::create([
            'name' => 'Nutty',
            'description' => 'Crunchy nuts and nut-based snacks',
            'image' => 'categories/nutty.jpg',
        ]);
    }
} 