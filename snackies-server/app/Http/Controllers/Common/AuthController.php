<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\common\AuthService;
use App\Traits\ResponseTrait;

class AuthController extends Controller
{
    use ResponseTrait;
    public function login(Request $request)
    {
        $user = AuthService::login($request);
        if ($user)
            return $this->responseJSON($user);
        return $this->responseJSON(null, "error", 401);
    }

    public function register(Request $request)
    {
        $user = AuthService::register($request);
        return $this->responseJSON($user);
    }

}
