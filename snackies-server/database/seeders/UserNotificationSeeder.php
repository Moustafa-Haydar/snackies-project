<?php

namespace Database\Seeders;

use App\Models\UserNotification;
use Illuminate\Database\Seeder;

class UserNotificationSeeder extends Seeder
{

    public function run(): void
    {
        // Create user-notification relationships
        // Each user might receive multiple notifications
        UserNotification::factory(50)->create();
    }
} 