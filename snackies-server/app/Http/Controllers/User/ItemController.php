<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\User\ItemService;
use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{

    function getAllItems($id = null)
    {
        $items = ItemService::getAllItems($id);
        return $this->responseJSON($items);
    }

}