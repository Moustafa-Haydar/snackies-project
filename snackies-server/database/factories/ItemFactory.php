<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => Category::inRandomOrder()->first()->id,
            'name' => fake()->name(3),
            'description' => fake()->realText(100),
            'price' => fake()->randomFloat(2, 1, 20),
            'stock' => fake()->randomNumber(2, false)
        ];
    }
}
