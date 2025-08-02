<?php

namespace App\Services\User;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartService
{
    public static function addItemToCart (Request $request) {
        if (!Cart::where('user_id', $request->user_id)->exists()) {
            $cart = new Cart();

            $cart->user_id = $request->user_id;

            $cart->save();
        }

        $cart = Cart::where('user_id', $request->user_id)->get();
        $cart_id = $cart->pluck('id')[0];

        $cartItem = new CartItem();

        $cartItem->cart_id = $cart_id;
        $cartItem->item_id = $request->item_id;

        $cartItem->save();

        return $cartItem;
    }
}
