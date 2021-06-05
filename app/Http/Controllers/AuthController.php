<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
        $fields = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'role' => 'string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',
        ]);


        // Check User
        $user = new User();
        $user->firstName = $fields['firstName'];
        $user->lastName = $fields['lastName'];
        $user->role = $fields['role'] ?? 'user';
        $user->email = $fields['email'];
        $user->password = bcrypt($fields['password']);
        $user->save();

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }



    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return [
            'message' => 'Logged Out'
        ];
    }



    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Check email
        $user = User::where('email', $fields['email'])->first();

        // check password
        if(!$user || !Hash::check($fields['password'], $user->password) )
        {
            return response([
                'message' => 'Bad Creds'
            ], 401);

        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
}
