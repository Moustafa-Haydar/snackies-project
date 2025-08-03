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
            'image_url' => '../../Assets/CategoryCards/Cheesy.jpg',
        ]);

        Category::create([
            'name' => 'Chocolatey',
            'description' => 'Sweet chocolate treats and candies',
            'image_url' => '../../Assets/CategoryCards/Chocolatty.jpg',
        ]);

        Category::create([
            'name' => 'Nutty',
            'description' => 'Crunchy nuts and nut-based snacks',
            'image_url' => '../../Assets/CategoryCards/Nutty.jpg',
        ]);
    }
}
