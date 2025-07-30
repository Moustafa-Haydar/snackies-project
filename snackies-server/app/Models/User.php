<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $primaryKey = 'user_ID';

    protected $fillable = [
        'f_name',
        'L_name',
        'hashedPassword',
        'email',
        'phone',
        'role',
    ];

    protected $hidden = [
        'hashedPassword',
    ];

    protected function casts(): array
    {
        return [
            'role' => 'string',
        ];
    }

    // Relationships
    public function orders()
    {
        return $this->hasMany(Order::class, 'user_ID', 'user_ID');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'user_ID', 'user_ID');
    }

    public function carts()
    {
        return $this->hasMany(Cart::class, 'user_ID', 'user_ID');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'user_ID', 'user_ID');
    }
}
