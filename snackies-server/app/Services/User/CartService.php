<?php

namespace App\Services\User;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartService
{
    public static function addItemToCart (Request $request) {
        if (Cart::where('user_id', $request->user_id)->get()) {
            return "This cart exists";
        }
    }
}
