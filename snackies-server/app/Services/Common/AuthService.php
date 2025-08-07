<?php

namespace App\Services\Common;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\StoreUserRequest;


class AuthService
{

    public static function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        // from the request only taking the attributes that i want
        $credentials = $request->only('email', 'password');

        // authenticated -> already loggedIn
        // here we are attempting we are logged in
        $token = Auth::attempt($credentials);

        if (!$token) {
            return null;
        }

        $user = Auth::user(); // user is now an obj
        $user->token = $token;
        // i can add any attribute i want
        // add attribute to the user
        // now the user obj has its own token
        return $user;
    }

    public static function register(Request $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        return ($user);
    }

}
