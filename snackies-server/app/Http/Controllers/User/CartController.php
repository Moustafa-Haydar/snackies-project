<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\User\CartService;
use App\Traits\ResponseTrait;

class CartController extends Controller
{
    use ResponseTrait;

    public function addToCart (Request $request) {
        return $this->responseJSON("Item added");
    }

    public function getCartByUserId(Request $request, $id)
    {
        try {
            $cart = CartService::getCartByUserId($request, $id);
            if ($cart) {
                return $this->responseJSON($cart, "Cart retrieved successfully");
            }
            return $this->responseJSON(null, "No cart found", 404);
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }
}
