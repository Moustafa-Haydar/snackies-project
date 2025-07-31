<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reviews for Cheese Crackers (item_ID = 1)
        Review::create([
            'item_ID' => 1,
            'user_ID' => 2,
            'text' => 'Perfect cheese crackers! Great crunch and flavor.',
            'rating' => 5,
        ]);

        Review::create([
            'item_ID' => 1,
            'user_ID' => 3,
            'text' => 'Good cheese crackers, would buy again.',
            'rating' => 4,
        ]);

        // Reviews for Cheese Puffs (item_ID = 2)
        Review::create([
            'item_ID' => 2,
            'user_ID' => 2,
            'text' => 'Light and airy, perfect cheese flavor!',
            'rating' => 5,
        ]);

        Review::create([
            'item_ID' => 2,
            'user_ID' => 4,
            'text' => 'Good cheese puffs, but could use more seasoning.',
            'rating' => 3,
        ]);

        // Reviews for Dark Chocolate Bar (item_ID = 4)
        Review::create([
            'item_ID' => 4,
            'user_ID' => 3,
            'text' => 'Rich and delicious dark chocolate!',
            'rating' => 5,
        ]);

        Review::create([
            'item_ID' => 4,
            'user_ID' => 5,
            'text' => 'Excellent quality chocolate, worth the price.',
            'rating' => 4,
        ]);

        // Reviews for Chocolate Cookies (item_ID = 5)
        Review::create([
            'item_ID' => 5,
            'user_ID' => 4,
            'text' => 'Soft and chewy cookies with perfect chocolate chips.',
            'rating' => 4,
        ]);

        Review::create([
            'item_ID' => 5,
            'user_ID' => 2,
            'text' => 'Delicious chocolate cookies, exactly what I expected.',
            'rating' => 4,
        ]);

        // Reviews for Roasted Almonds (item_ID = 7)
        Review::create([
            'item_ID' => 7,
            'user_ID' => 4,
            'text' => 'Fresh and crunchy almonds. Great for snacking!',
            'rating' => 5,
        ]);

        Review::create([
            'item_ID' => 7,
            'user_ID' => 5,
            'text' => 'Premium quality almonds, but the bag is a bit small.',
            'rating' => 3,
        ]);
    }
} 