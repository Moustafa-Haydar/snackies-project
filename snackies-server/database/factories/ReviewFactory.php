<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $positiveReviews = [
            'Great product! Very fresh and delicious.',
            'Excellent quality, would definitely buy again.',
            'Perfect taste and texture, highly recommended!',
            'Amazing flavor, exceeded my expectations.',
            'Best snack I\'ve ever had, absolutely love it!',
            'Great value for money, very satisfied.',
            'Delicious and fresh, perfect for snacking.',
            'High quality product, worth every penny.',
            'Fantastic taste, will order again soon.',
            'Excellent packaging and great taste!',
            'Absolutely delicious! Can\'t get enough of this.',
            'Premium quality, definitely worth the price.',
            'Perfect for snacking, love the flavor!',
            'Great taste and texture, highly recommend!',
            'Excellent product, will definitely buy again.',
        ];

        $negativeReviews = [
            'It was awful, never gonna buy this again.',
            'Terrible taste, completely disappointed.',
            'Waste of money, would not recommend.',
            'Poor quality, very unsatisfied.',
            'Bad experience, product was stale.',
            'Not worth the price at all.',
            'Disappointing flavor, expected better.',
            'Low quality product, avoid this.',
            'Terrible packaging, product was damaged.',
            'Not fresh at all, very disappointed.',
            'Awful taste, couldn\'t finish it.',
            'Poor value for money, not recommended.',
            'Bad quality, would not buy again.',
            'Disappointing product, waste of money.',
            'Terrible experience, avoid this product.',
        ];

        $allReviews = array_merge($positiveReviews, $negativeReviews);
        
        $rating = fake()->randomElement([
            fake()->numberBetween(1, 3),
            fake()->numberBetween(4, 5), 
            fake()->numberBetween(4, 5),
            fake()->numberBetween(4, 5),
        ]);

        return [
            'item_id' => fake()->numberBetween(1, 50), // 50 items
            'user_id' => fake()->numberBetween(1, 10), // 10 users
            'text' => fake()->randomElement($allReviews),
            'rating' => $rating,
        ];
    }
}
