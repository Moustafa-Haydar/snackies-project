<?php

namespace App\Services\User;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderService
{
    public static function placeOrder(Request $request, $id)
    {
        // Get cart by user ID
        $cart = Cart::with(['items'])
                   ->where('user_id', $id)
                   ->first();
        
        if (!$cart) {
            return null;
        }

        if ($cart->items->isEmpty()) {
            return 'empty_cart';
        }

        // Start transaction
        DB::beginTransaction();

        try {
            // Calculate total amount
            $totalAmount = 0;
            foreach ($cart->items as $item) {
                $totalAmount += $item->pivot->quantity * $item->price;
            }

            // Create order
            $order = new Order();
            $order->user_id = $id;
            $order->status = 'pending';
            $order->total_amount = $totalAmount;
            $order->shipping_address = $request->shipping_address ?? 'Default address';
            $order->payment_info = $request->payment_info ?? null;
            $order->save();

            // Create order items
            foreach ($cart->items as $item) {
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id;
                $orderItem->item_id = $item->id;
                $orderItem->quantity = $item->pivot->quantity;
                $orderItem->price_at_purchase = $item->price;
                $orderItem->save();
            }

            // Clear the cart
            $cart->items()->detach();

            DB::commit();

            return $order;
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
    }
} 