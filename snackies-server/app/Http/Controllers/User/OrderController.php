<?php

namespace App\Http\Controllers\User;

use App\Events\OrderPlaced;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\User\OrderService;
use App\Traits\ResponseTrait;

use App\Models\User;
use App\Jobs\SendEmailJob;
use App\Mail\OrderInvoiceMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;

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
              
                OrderPlaced::dispatch($order);

                $user = User::find($id);
                if (!$user)
                    return;
                // Send Email - Queued Job
                SendEmailJob::dispatch($user['email'], $user['id'], $order['id']);

                return $this->responseJSON($order, "Order placed successfully");
            }

            return $this->responseJSON(null, "No cart found", 404);
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }
  
    public function updateOrderStatus(Request $request, $orderId)
    {
        try {
            $request->validate([
                'status' => 'required|string|in:pending,processing,shipped,delivered,cancelled'
            ]);

            $order = OrderService::updateOrderStatus($orderId, $request->status);

            if (!$order) {
                return $this->responseJSON(null, "Order not found", 404);
            }

            return $this->responseJSON($order, "Order status updated successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function cancelOrder(Request $request, $orderId)
    {
        try {
            $result = OrderService::cancelOrder($orderId);

            if (!$result) {
                return $this->responseJSON(null, "Order not found", 404);
            }

            if ($result === 'cannot_cancel_delivered') {
                return $this->responseJSON(null, "Cannot cancel delivered order", 400);
            }

            return $this->responseJSON($result, "Order cancelled successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function getUserOrders(Request $request, $userId)
    {
        try {
            $orders = OrderService::getUserOrders($userId);
            return $this->responseJSON($orders, "User orders retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function getOrderDetails(Request $request, $orderId)
    {
        try {
            $order = OrderService::getOrderDetails($orderId);

            if (!$order) {
                return $this->responseJSON(null, "Order not found", 404);
            }

            return $this->responseJSON($order, "Order details retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function getAllOrdersByStatus(Request $request)
    {
        try {
            $request->validate([
                'status' => 'required|string|in:pending,processing,shipped,delivered,cancelled'
            ]);

            $orders = OrderService::getAllOrdersByStatus($request->status);
            return $this->responseJSON($orders, "All orders with status '{$request->status}' retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

}
