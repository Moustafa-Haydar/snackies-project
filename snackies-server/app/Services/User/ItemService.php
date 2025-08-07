<?php

namespace App\Services\User;
use Stevebauman\Location\Facades\Location;
use Illuminate\Http\Request;

use App\Models\Item;

class ItemService
{

    static function getAllItems($id = null)
    {
        if (!$id) {
            $items = Item::with(['category', 'reviews'])
                        ->where('stock', '>', 0)
                        ->orderBy('created_at', 'desc')
                        ->get()
                        ->map(function ($item) {
                            return [
                                'id' => $item->id,
                                'name' => $item->name,
                                'description' => $item->description,
                                'price' => $item->price,
                                'stock' => $item->stock,
                                'category' => $item->category,
                                'average_rating' => $item->average_rating,
                                'review_count' => $item->review_count,
                                'created_at' => $item->created_at,
                                'updated_at' => $item->updated_at,
                            ];
                        });
            return $items;
        }
        
        $item = Item::with(['category', 'reviews'])->find($id);
        if (!$item) {
            return null;
        }
        
        return [
            'id' => $item->id,
            'name' => $item->name,
            'description' => $item->description,
            'price' => $item->price,
            'stock' => $item->stock,
            'category' => $item->category,
            'average_rating' => $item->average_rating,
            'review_count' => $item->review_count,
            'reviews' => $item->reviews,
            'created_at' => $item->created_at,
            'updated_at' => $item->updated_at,
        ];
    }

    static function getItemById($itemId)
    {
        $item = Item::with(['category', 'reviews'])->find($itemId);
        if (!$item) {
            return null;
        }
        
        return [
            'id' => $item->id,
            'name' => $item->name,
            'description' => $item->description,
            'price' => $item->price,
            'stock' => $item->stock,
            'category' => $item->category,
            'average_rating' => $item->average_rating,
            'review_count' => $item->review_count,
            'reviews' => $item->reviews,
            'created_at' => $item->created_at,
            'updated_at' => $item->updated_at,
        ];
    }

    static function getProductOfTheDay()
    {
        $productOfTheDay = Item::with(['category', 'reviews'])
                              ->where('stock', '>', 0)
                              ->inRandomOrder()
                              ->first();

        if (!$productOfTheDay) {
            return null;
        }

        return [
            'id' => $productOfTheDay->id,
            'name' => $productOfTheDay->name,
            'description' => $productOfTheDay->description,
            'price' => $productOfTheDay->price,
            'stock' => $productOfTheDay->stock,
            'category' => $productOfTheDay->category,
            'average_rating' => $productOfTheDay->average_rating,
            'review_count' => $productOfTheDay->review_count,
            'reviews' => $productOfTheDay->reviews,
            'created_at' => $productOfTheDay->created_at,
            'updated_at' => $productOfTheDay->updated_at,
        ];
    }
}