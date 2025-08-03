<?php

namespace App\Http\Controllers;
use App\Traits\ResponseTrait;
use Tymon\JWTAuth\Facades\JWTAuth;


abstract class Controller
{
    use ResponseTrait;
}
