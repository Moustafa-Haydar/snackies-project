<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $item = Item::inRandomOrder()->first();
        
        return [
            'order_id' => Order::inRandomOrder()->first()->id,
            'item_id' => $item->id,
            'quantity' => fake()->numberBetween(1, 3),
            'price_at_purchase' => $item->price,
        ];
    }
} 