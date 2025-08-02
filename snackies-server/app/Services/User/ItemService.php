<?php

namespace App\Services\User;
use Stevebauman\Location\Facades\Location;
use Illuminate\Http\Request;

use App\Models\Item;

class ItemService
{

    static function getAllItems($id = null)
    {
        if (!$id) {
            return Item::all();
        }
        return Item::find($id);
    }

}