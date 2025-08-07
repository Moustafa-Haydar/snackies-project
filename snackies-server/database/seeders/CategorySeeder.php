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
            'image_url' => 'http://localhost:8000/storage/CategoryCards/Cheesy.png',
        ]);

        Category::create([
            'name' => 'Chocolatey',
            'description' => 'Sweet chocolate treats and candies',
            'image_url' => 'http://localhost:8000/storage/CategoryCards/Chocolatty.png',
        ]);

        Category::create([
            'name' => 'Nutty',
            'description' => 'Crunchy nuts and nut-based snacks',
            'image_url' => 'http://localhost:8000/storage/CategoryCards/Nutty.png',
        ]);
    }
}
