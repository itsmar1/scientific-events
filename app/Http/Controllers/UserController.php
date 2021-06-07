<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    ///  EVENT ADMINS CRUD
    public function getEventAdmins(Request $request)
    {
        return User::where('role', 'event_admin')->get();
    }

    public function postEventAdmins(Request $request)
    {
        $fields = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email',
            'role' => 'string',
            'password' => 'required|confirmed'
        ]);

        $user = new User();
        $user->firstName = $fields['firstName'];
        $user->lastName = $fields['lastName'];
        $user->email = $fields['email'];
        $user->role = $fields['role'] ?? 'event_admin';
        $user->password = $fields['password'];
        $user->save();

        $response = [
            'event_admin' => $user
        ];

        return response($response, 201);
    }

    public function putEventAdmins(Request $request)
    {
        return User::find($request->id)->update($request->all());
    }

    public function deleteEventAdmins(Request $request)
    {
        return User::find($request->id)->delete();
    }


    // RESPONSABLE CRUD
    public function getResponsable(Request $request)
    {
        return User::where('role', 'responsable')->get();
    }

    public function postResponsable(Request $request)
    {
        $fields = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email',
            'role' => 'string',
            'password' => 'required|confirmed'
        ]);

        $user = new User();
        $user->firstName = $fields['firstName'];
        $user->lastName = $fields['lastName'];
        $user->email = $fields['email'];
        $user->role = $fields['role'] ?? 'responsable';
        $user->password = $fields['password'];
        $user->save();

        $response = [
            'responsable' => $user
        ];

        return response($response, 201);
    }

    public function putResponsable(Request $request)
    {
        return User::find($request->id)->update($request->all());
    }

    public function deleteResponsable(Request $request)
    {
        return User::find($request->id)->delete();
    }



    ///  SESSION ADMINS CRUD
    public function getSessionAdmins(Request $request)
    {
        return User::where('role', 'session_admin')->get();
    }

    public function postSessionAdmins(Request $request)
    {
        $fields = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email',
            'role' => 'string',
            'password' => 'required|confirmed'
        ]);

        $user = new User();
        $user->firstName = $fields['firstName'];
        $user->lastName = $fields['lastName'];
        $user->email = $fields['email'];
        $user->role = $fields['role'] ?? 'session_admin';
        $user->password = $fields['password'];
        $user->save();

        $response = [
            'session_admin' => $user
        ];

        return response($response, 201);
    }

    public function putSessionAdmins(Request $request)
    {
        return User::find($request->id)->update($request->all());
    }

    public function deleteSessionAdmins(Request $request)
    {
        return User::find($request->id)->delete();
    }



    ///  SESSION ADMINS CRUD
    public function getUsers(Request $request)
    {
        return User::where('role', 'user')->get();
    }

    public function postUsers(Request $request)
    {
        $fields = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email',
            'role' => 'string',
            'password' => 'required|confirmed'
        ]);

        $user = new User();
        $user->firstName = $fields['firstName'];
        $user->lastName = $fields['lastName'];
        $user->email = $fields['email'];
        $user->role = $fields['role'] ?? 'user';
        $user->password = $fields['password'];
        $user->save();

        $response = [
            'session_admin' => $user
        ];

        return response($response, 201);
    }

    public function putUsers(Request $request)
    {
        return User::find($request->id)->update($request->all());
    }

    public function deleteUsers(Request $request)
    {
        return User::find($request->id)->delete();
    }


    // GET & UPDATE current authenticated user
    public function getUser()
    {
        return auth()->user();
    }

    public function updateUser(Request $request)
    {
        return auth()->user()->update($request->all());
    }


}
