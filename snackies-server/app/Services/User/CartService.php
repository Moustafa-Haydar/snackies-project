<?php

namespace App\Services\User;

use Illuminate\Http\Request;

class CartService
{
    public static function addItemToCart (Request $request) {
        return "Added to cart";
    }
}
