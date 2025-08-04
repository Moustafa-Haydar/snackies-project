<?php

namespace App\Listeners;

use App\Events\OrderPlaced;
use App\Models\Item;
use App\Models\OrderItem;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateStock
{
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
        // echo $itemsPurchased;
        foreach ($itemsPurchased as $i) {
            $curItem = Item::find($i->item_id);

            $curItem->stock = $curItem->stock - 1;

            $curItem->save();
        }
    }
}
