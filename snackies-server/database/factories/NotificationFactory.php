<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $orderNotifications = [
            'Order Shipped' => 'Your order has been shipped and is on its way!',
            'Order Delivered' => 'Your order has been delivered successfully!',
            'Order Processing' => 'Your order is being processed and will ship soon.',
            'Order Cancelled' => 'Your order has been cancelled as requested.',
            'Order Confirmed' => 'Your order has been confirmed and is being prepared.',
        ];

        $promoNotifications = [
            'Special Offer' => 'Get 20% off your next purchase with code SAVE20!',
            'Flash Sale' => 'Flash sale! 50% off all items for the next 2 hours!',
            'New Arrivals' => 'Check out our new arrivals - fresh snacks just in!',
            'Weekend Deal' => 'Weekend special: Buy 2 get 1 free on all cheese snacks!',
            'Holiday Sale' => 'Holiday sale is here! Up to 40% off selected items.',
        ];

        $systemNotifications = [
            'Welcome' => 'Welcome to Snackies! Enjoy your shopping experience.',
            'Account Updated' => 'Your account information has been updated successfully.',
            'Password Reset' => 'Your password has been reset successfully.',
            'Email Verified' => 'Your email address has been verified.',
            'Profile Complete' => 'Your profile is now complete!',
        ];

        $allNotifications = array_merge($orderNotifications, $promoNotifications, $systemNotifications);
        $notification = fake()->randomElement(array_keys($allNotifications));
        
        return [
            'user_ID' => User::factory(),
            'type' => $this->getNotificationType($notification),
            'title' => $notification,
            'message' => $allNotifications[$notification],
            'read_at' => fake()->optional(0.3)->dateTimeBetween('-1 week', 'now'),
        ];
    }

    /**
     * Get notification type based on title.
     */
    private function getNotificationType(string $title): string
    {
        if (str_contains($title, 'Order')) {
            return 'order';
        } elseif (in_array($title, ['Special Offer', 'Flash Sale', 'New Arrivals', 'Weekend Deal', 'Holiday Sale'])) {
            return 'promo';
        } else {
            return 'system';
        }
    }

    /**
     * Indicate that the notification is an order notification.
     */
    public function order(): static
    {
        return $this->state(function (array $attributes) {
            $orderNotifications = [
                'Order Shipped' => 'Your order has been shipped and is on its way!',
                'Order Delivered' => 'Your order has been delivered successfully!',
                'Order Processing' => 'Your order is being processed and will ship soon.',
            ];

            $notification = fake()->randomElement(array_keys($orderNotifications));

            return [
                'type' => 'order',
                'title' => $notification,
                'message' => $orderNotifications[$notification],
            ];
        });
    }

    /**
     * Indicate that the notification is a promotional notification.
     */
    public function promo(): static
    {
        return $this->state(function (array $attributes) {
            $promoNotifications = [
                'Special Offer' => 'Get 20% off your next purchase with code SAVE20!',
                'Flash Sale' => 'Flash sale! 50% off all items for the next 2 hours!',
                'New Arrivals' => 'Check out our new arrivals - fresh snacks just in!',
            ];

            $notification = fake()->randomElement(array_keys($promoNotifications));

            return [
                'type' => 'promo',
                'title' => $notification,
                'message' => $promoNotifications[$notification],
            ];
        });
    }

    /**
     * Indicate that the notification is a system notification.
     */
    public function system(): static
    {
        return $this->state(function (array $attributes) {
            $systemNotifications = [
                'Welcome' => 'Welcome to Snackies! Enjoy your shopping experience.',
                'Account Updated' => 'Your account information has been updated successfully.',
                'Email Verified' => 'Your email address has been verified.',
            ];

            $notification = fake()->randomElement(array_keys($systemNotifications));

            return [
                'type' => 'system',
                'title' => $notification,
                'message' => $systemNotifications[$notification],
            ];
        });
    }

    /**
     * Indicate that the notification is read.
     */
    public function read(): static
    {
        return $this->state(fn (array $attributes) => [
            'read_at' => fake()->dateTimeBetween('-1 week', 'now'),
        ]);
    }

    /**
     * Indicate that the notification is unread.
     */
    public function unread(): static
    {
        return $this->state(fn (array $attributes) => [
            'read_at' => null,
        ]);
    }
} 