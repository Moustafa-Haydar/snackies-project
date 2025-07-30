<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        // Create 10 positive reviews using the factory
        \App\Models\Review::factory(10)->create();
    }
} 