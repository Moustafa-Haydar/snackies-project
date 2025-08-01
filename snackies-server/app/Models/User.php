<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
    ];

    // protected function casts(): array
    // {
    //     return [
    //         'role' => 'string',
    //     ];
    // }

    // Relationships
    // public function orders()
    // {
    //     return $this->hasMany(Order::class);
    // }

    // public function reviews()
    // {
    //     return $this->hasMany(Review::class);
    // }

    // public function cart()
    // {
    //     return $this->hasOne(Cart::class);
    // }

    // public function notifications()
    // {
    //     return $this->belongsToMany(Notification::class, 'user_notifications')
    //                 ->withPivot('read_at')
    //                 ->withTimestamps();
    // }
}
