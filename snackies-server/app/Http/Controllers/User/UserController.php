<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\User\UserService;
use Illuminate\Http\Request;
use App\Models\User;
use App\Traits\ResponseTrait;

class UserController extends Controller
{
    use ResponseTrait;

    public function getUsers(Request $request, $id = null)
    {
        try {
            if ($id) {
                // Get specific user by ID
                $user = User::find($id);
                if (!$user) {
                    return $this->responseJSON(null, "User not found", 404);
                }
                return $this->responseJSON($user, "User retrieved successfully");
            } else {
                // Get all users
                $users = User::all();
                return $this->responseJSON($users, "All users retrieved successfully");
            }
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    // moustafa
    function updateUser(Request $request, $id)
    {
        $user = UserService::updateUser($request, $id);

        if ($user == null) {
            return $this->responseJSON(null, "User info not udpated!", 500);
        }

        return $this->responseJSON($user);
    }

    function getNotifications(Request $request, $id) {
        return $this->responseJSON(UserService::getNotifications($id));
    }
}
