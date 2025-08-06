<?php

namespace App\Services\User;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Item;
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

    public static function updateOrderStatus($orderId, $status)
    {
        $order = Order::find($orderId);
        if (!$order) {
            return null;
        }

        $order->status = $status;
        $order->save();

        return $order;
    }

    public static function cancelOrder($orderId)
    {
        $order = Order::find($orderId);
        if (!$order) {
            return null;
        }

        if ($order->status === 'delivered') {
            return 'cannot_cancel_delivered';
        }

        $order->status = 'cancelled';
        $order->save();

        return $order;
    }

    public static function getUserOrders($userId)
    {
        return Order::with(['items', 'user'])
                   ->where('user_id', $userId)
                   ->orderBy('created_at', 'desc')
                   ->get();
    }

    public static function getOrderDetails($orderId)
    {
        return Order::with(['items', 'user'])
                   ->find($orderId);
    }

    public static function getAllOrdersByStatus($status)
    {
        return Order::with(['items', 'user'])
                   ->where('status', $status)
                   ->orderBy('created_at', 'desc')
                   ->get();
    }

    public static function getAllOrders()
    {
        return Order::with(['items', 'user'])
                   ->orderBy('created_at', 'desc')
                   ->get();
    }
} 