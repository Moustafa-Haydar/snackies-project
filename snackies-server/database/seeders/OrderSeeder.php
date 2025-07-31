<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // User 2 orders
        Order::create([
            'user_ID' => 2,
            'status' => 'delivered',
            'total_amount' => 15.97,
            'shipping_address' => 'Hamra Street, Building 45, 3rd Floor, Beirut, Lebanon',
            'payment_info' => 'Credit Card ending in 4385',
        ]);

        Order::create([
            'user_ID' => 2,
            'status' => 'pending',
            'total_amount' => 8.98,
            'shipping_address' => 'Hamra Street, Building 45, 3rd Floor, Beirut, Lebanon',
            'payment_info' => 'Credit Card ending in 2947',
        ]);

        // User 3 (Jane) orders
        Order::create([
            'user_ID' => 3,
            'status' => 'shipped',
            'total_amount' => 12.99,
            'shipping_address' => 'Achrafieh, Rue Monot, Building 12, Apartment 7, Beirut, Lebanon',
            'payment_info' => 'Credit Card ending in 5810',
        ]);

        // User 4 orders
        Order::create([
            'user_ID' => 4,
            'status' => 'processing',
            'total_amount' => 14.97,
            'shipping_address' => 'Jounieh, Main Street, Building 78, 2nd Floor, Mount Lebanon, Lebanon',
            'payment_info' => 'Debit Card ending in 9126',
        ]);

        // User 5  orders
        Order::create([
            'user_ID' => 5,
            'status' => 'cancelled',
            'total_amount' => 7.98,
            'shipping_address' => 'Tripoli, Al Mina Street, Building 23, Apartment 15, North Lebanon, Lebanon',
            'payment_info' => 'Credit Card ending in 7468',
        ]);
    }
} 