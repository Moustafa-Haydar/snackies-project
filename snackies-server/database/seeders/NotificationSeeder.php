<?php

namespace Database\Seeders;

use App\Models\Notification;
use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Notifications for User 2 (John)
        Notification::create([
            'user_ID' => 2,
            'type' => 'order',
            'title' => 'Order Shipped',
            'message' => 'Your order #1 has been shipped and is on its way!',
            'read_at' => null,
        ]);

        Notification::create([
            'user_ID' => 2,
            'type' => 'promo',
            'title' => 'Special Offer',
            'message' => 'Get 20% off your next purchase with code SAVE20!',
            'read_at' => now(),
        ]);

        // Notifications for User 3 (Jane)
        Notification::create([
            'user_ID' => 3,
            'type' => 'order',
            'title' => 'Order Delivered',
            'message' => 'Your order #3 has been delivered successfully!',
            'read_at' => now(),
        ]);

        Notification::create([
            'user_ID' => 3,
            'type' => 'system',
            'title' => 'Welcome',
            'message' => 'Welcome to Snackies! Enjoy your shopping experience.',
            'read_at' => null,
        ]);

        // Notifications for User 4 (Bob)
        Notification::create([
            'user_ID' => 4,
            'type' => 'order',
            'title' => 'Order Processing',
            'message' => 'Your order #4 is being processed and will ship soon.',
            'read_at' => null,
        ]);

        // Notifications for User 5 (Alice)
        Notification::create([
            'user_ID' => 5,
            'type' => 'order',
            'title' => 'Order Cancelled',
            'message' => 'Your order #5 has been cancelled as requested.',
            'read_at' => now(),
        ]);

        Notification::create([
            'user_ID' => 5,
            'type' => 'promo',
            'title' => 'Flash Sale',
            'message' => 'Flash sale! 50% off all candy items for the next 2 hours!',
            'read_at' => null,
        ]);
    }
} 