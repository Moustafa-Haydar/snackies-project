<?php

namespace App\Listeners;

use App\Events\OrderPlaced;
use App\Models\Item;
use App\Models\OrderItem;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Throwable;

class UpdateStock implements ShouldQueue
{
    use InteractsWithQueue;
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event
     */
    public function handle(OrderPlaced $event): void
    {
        $itemsPurchased = OrderItem::where("order_id", $event->order->id)->get();

        foreach ($itemsPurchased as $i) {
            $curItem = Item::find($i->item_id);

            $curItem->stock = $curItem->stock - 1;

            $curItem->save();
        }
        Log::info("Order " . $event->order->id . " placed successfully! Stock updated.");
    }

    public function failed(OrderPlaced $event, Throwable $exception): void {
        Log::error('Failed to place order ' . $event->order->id . $exception->getMessage());
    }
}
