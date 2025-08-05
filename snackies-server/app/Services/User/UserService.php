<?php

namespace App\Services\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\ResponseTrait;
use App\Models\User;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class UserService
{
    use ResponseTrait;

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

            $user->save();

            $newToken = JWTAuth::fromUser($user);
            $user->token = $newToken;

            return $user;

        } catch (\Exception $e) {
            return null;
        }

    }

    public static function getNotifications($id) {
        $user = User::find($id);

        return $user->unreadNotifications;
    }

    public static function markAsRead(Request $request) {
        $user = User::find($request->userId);

        foreach($user->unreadNotifications as $n) {
            if ($n->id == $request->notifId) {
                $n->markAsRead();
                return $n;
            }
        }
    }

}
