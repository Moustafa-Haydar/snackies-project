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
        
        return [
            'item_ID' => Item::factory(),
            'user_ID' => User::factory(),
            'text' => fake()->randomElement($positiveReviews),
            'rating' => fake()->numberBetween(4, 5),
        ];
    }

    /**
     * Indicate that the review has a specific rating.
     */
    public function rating(int $rating): static
    {
        return $this->state(fn (array $attributes) => [
            'rating' => $rating,
        ]);
    }
} 