<?php

namespace App\Services\User;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartService
{
    public static function getCartByUserId(Request $request, $id)
    {
        // Get cart by user ID
        $cart = Cart::with(['items'])
                   ->where('user_id', $id)
                   ->first();
        
        if (!$cart) {
            return null;
        }

        return $cart;
    }
} 