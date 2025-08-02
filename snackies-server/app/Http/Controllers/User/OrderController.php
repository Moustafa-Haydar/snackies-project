<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\User\OrderService;
use App\Traits\ResponseTrait;

class OrderController extends Controller
{
    use ResponseTrait;

    public function placeOrder(Request $request, $id)
    {
        try {
            $order = OrderService::placeOrder($request, $id);
            
            if ($order === 'empty_cart') {
                return $this->responseJSON(null, "Cart is empty", 400);
            }
            
            if ($order) {
                return $this->responseJSON($order, "Order placed successfully");
            }
            
            return $this->responseJSON(null, "No cart found", 404);
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }
} 