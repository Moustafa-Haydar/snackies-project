<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            ItemSeeder::class,
            CartSeeder::class,
            OrderSeeder::class,
            ReviewSeeder::class,
            NotificationSeeder::class,
            CartItemSeeder::class,
            OrderItemSeeder::class,
            UserNotificationSeeder::class,
        ]);
    }
}
