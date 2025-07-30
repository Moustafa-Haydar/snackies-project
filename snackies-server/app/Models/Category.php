<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $primaryKey = 'category_ID';

    protected $fillable = [
        'name',
        'description',
        'image',
    ];

    // Relationships
    public function items()
    {
        return $this->hasMany(Item::class, 'CATEGORY_ID', 'category_ID');
    }
} 