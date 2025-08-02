<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\User\CartService;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart (Request $request) {
        return $this->responseJSON(CartService::addItemToCart($request));
    }
}
