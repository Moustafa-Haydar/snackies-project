<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;


class UserFactory extends Factory
{

    protected static ?string $password;


    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'password' => static::$password ??= Hash::make('password'),
            'email' => fake()->unique()->safeEmail(),
            'phone' => '+961 ' . fake()->randomElement(['03', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81']) . ' ' . fake()->numberBetween(100, 999) . ' ' . fake()->numberBetween(100, 999),
            'role' => 'user',
        ];
    }
}
