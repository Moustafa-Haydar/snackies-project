<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    public function run(): void
    {
        // Create admin user
        User::create([
            'f_name' => 'Admin',
            'L_name' => 'User',
            'hashedPassword' => Hash::make('Password'),
            'email' => 'admin@snackies.com',
            'phone' => '+961 70 123 456',
            'role' => 'admin',
        ]);

        // Create regular users
        User::create([
            'f_name' => 'ali',
            'L_name' => 'saad',
            'hashedPassword' => Hash::make('Password'),
            'email' => 'john@example.com',
            'phone' => '+961 71 234 567',
            'role' => 'user',
        ]);

        User::create([
            'f_name' => 'christ',
            'L_name' => 'vartanian',
            'hashedPassword' => Hash::make('Password'),
            'email' => 'jane@example.com',
            'phone' => '+961 76 345 678',
            'role' => 'user',
        ]);

        User::create([
            'f_name' => 'kevo',
            'L_name' => 'nassar',
            'hashedPassword' => Hash::make('Password'),
            'email' => 'kevo@gmail.com',
            'phone' => '+961 78 456 789',
            'role' => 'user',
        ]);

        User::create([
            'f_name' => 'Alice',
            'L_name' => 'AlZahra',
            'hashedPassword' => Hash::make('Password'),
            'email' => 'alice@gmail.com',
            'phone' => '+961 79 567 890',
            'role' => 'user',
        ]);
    }
} 