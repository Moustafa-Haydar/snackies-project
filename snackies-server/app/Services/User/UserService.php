<?php

namespace App\Services\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseTrait;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserService
{
    use ResponseTrait;
    use JWTAuth;

    static function updateUser(Request $request, $id)
    {
        try {

            if (!$id)
                return null;

            $user = User::find($id);

            if (!$user)
                return null;

            $user->first_name = $request['first_name'] ?? $user->first_name;
            $user->last_name = $request['last_name'] ?? $user->last_name;
            $user->email = $request['email'] ?? $user->email;

            $newToken = JWTAuth::fromUser($user);
            $user->token = $newToken();

            $user->save();

            return $user;

        } catch (\Exception $e) {
            return null;
        }

    }

}