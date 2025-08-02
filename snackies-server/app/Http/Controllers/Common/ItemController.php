<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Traits\ResponseTrait;

class ItemController extends Controller
{
    use ResponseTrait;

    public function getAllItems(Request $request)
    {
        try {
            $items = Item::with(['category', 'reviews'])
                        ->where('stock', '>', 0)
                        ->orderBy('created_at', 'desc')
                        ->get();

            return $this->responseJSON($items, "Items retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error retrieving items: " . $e->getMessage(), 500);
        }
    }

    public function getItemById(Request $request)
    {
        try {
            $request->validate([
                'item_id' => 'required|integer|exists:items,id'
            ]);

            $item = Item::with(['category', 'reviews'])
                       ->findOrFail($request->item_id);

            return $this->responseJSON($item, "Item retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error retrieving item: " . $e->getMessage(), 500);
        }
    }

    public function getProductOfTheDay(Request $request)
    {
        try {
            // Get a random item with stock > 0 as for product of the day
            $productOfTheDay = Item::with(['category', 'reviews'])
                                  ->where('stock', '>', 0)
                                  ->inRandomOrder()
                                  ->first();

            if (!$productOfTheDay) {
                return $this->responseJSON(null, "No products available", 404);
            }

            return $this->responseJSON($productOfTheDay, "Product of the day retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error retrieving product of the day: " . $e->getMessage(), 500);
        }
    }
} 