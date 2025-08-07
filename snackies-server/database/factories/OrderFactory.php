<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $lebaneseAddresses = [
            'Hamra Street, Building 45, 3rd Floor, Beirut, Lebanon',
            'Achrafieh, Rue Monot, Building 12, Apartment 7, Beirut, Lebanon',
            'Jounieh, Main Street, Building 78, 2nd Floor, Mount Lebanon, Lebanon',
            'Tripoli, Al Mina Street, Building 23, Apartment 15, North Lebanon, Lebanon',
            'Zahle, Main Road, Building 34, 1st Floor, Bekaa, Lebanon',
            'Saida, Corniche Street, Building 56, Apartment 12, South Lebanon, Lebanon',
            'Byblos, Old Souk, Building 89, 3rd Floor, Mount Lebanon, Lebanon',
            'Baalbek, Temple Street, Building 67, Apartment 8, Bekaa, Lebanon',
        ];

        $paymentInfo = [
            'Credit Card ending in ' . fake()->numberBetween(1000, 9999),
            'Debit Card ending in ' . fake()->numberBetween(1000, 9999),
            'Cash on Delivery',
        ];

        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'status' => fake()->numberBetween(1, 5),
            'total_amount' => fake()->randomFloat(2, 5.00, 50.00),
            'shipping_address' => fake()->randomElement($lebaneseAddresses),
            'payment_info' => fake()->randomElement($paymentInfo),
        ];
    }


    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'pending',
        ]);
    }

    public function processing(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'processing',
        ]);
    }


    public function shipped(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'shipped',
        ]);
    }

    public function delivered(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'delivered',
        ]);
    }


    public function cancelled(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'cancelled',
        ]);
    }
}
