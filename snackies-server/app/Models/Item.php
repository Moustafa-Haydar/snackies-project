<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'price',
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
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function carts()
    {
        return $this->belongsToMany(Cart::class, 'cart_items')
                    ->withPivot('quantity')
                    ->withTimestamps();
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_items')
                    ->withPivot('quantity', 'price_at_purchase')
                    ->withTimestamps();
    }

    // Get average review score
    public function getAverageRatingAttribute()
    {
        $average = $this->reviews()->avg('rating') ?? 0;
        return round($average);
    }

    // Get review count
    public function getReviewCountAttribute()
    {
        return $this->reviews()->count();
    }
}
