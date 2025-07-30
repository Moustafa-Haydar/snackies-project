<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $primaryKey = 'item_ID';

    protected $fillable = [
        'CATEGORY_ID',
        'name',
        'description',
        'price',
        'image',
        'stock',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'stock' => 'integer',
        ];
    }

    // Relationships
    public function category()
    {
        return $this->belongsTo(Category::class, 'CATEGORY_ID', 'category_ID');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'item_ID', 'item_ID');
    }

    public function carts()
    {
        return $this->hasMany(Cart::class, 'item_ID', 'item_ID');
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'item_ID', 'item_ID');
    }
} 