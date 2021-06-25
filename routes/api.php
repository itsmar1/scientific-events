<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CommitteeMemberController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Fetch the events for public users
Route::get('events', [EventController::class, 'preview']);
Route::get('eventSession/{id}', [SessionController::class, 'eventSession']);
Route::get('sessions/{id}', [SessionController::class, 'index']);
Route::get('sessions', [SessionController::class, 'getAllSessions']);

Route::get('getEvent/{id}', [EventController::class, 'getEvent']);

Route::get('contacts', [ContactController::class, 'index']);




Route::resource('contact', ContactController::class);

Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum', 'admin']], function() {
    // Events CRUD Admins APIs
    Route::get('getEventAdmins', [UserController::class, 'getEventAdmins']);
    Route::post('postEventAdmins', [UserController::class, 'postEventAdmins']);
    Route::put('putEventAdmins/{id}', [UserController::class, 'putEventAdmins']);
    Route::delete('deleteEventAdmins/{id}', [Usercontroller::class, 'deleteEventAdmins']);

    // Responsable CRUD APIs
    Route::get('getResponsable', [UserController::class, 'getResponsable']);
    Route::post('postResponsable', [UserController::class, 'postResponsable']);
    Route::put('putResponsable/{id}', [UserController::class, 'putResponsable']);
    Route::delete('deleteResponsable/{id}', [Usercontroller::class, 'deleteResponsable']);

    // Session CRUD Admin APIs
    Route::get('getSessionAdmins', [UserController::class, 'getSessionAdmins']);
    Route::post('postSessionAdmins', [UserController::class, 'postSessionAdmins']);
    Route::put('putSessionAdmins/{id}', [UserController::class, 'putSessionAdmins']);
    Route::delete('deleteSessionAdmins/{id}', [Usercontroller::class, 'deleteSessionAdmins']);


    // User CRUD APIs
    Route::get('getUsers', [UserController::class, 'getUsers']);
    Route::post('postUsers', [UserController::class, 'postUsers']);
    Route::put('putUsers/{id}', [UserController::class, 'putUsers']);
    Route::delete('deleteUsers/{id}', [Usercontroller::class, 'deleteUsers']);

    // Contacts GET & DELETE
    Route::get('contacts', [ContactController::class, 'index']);
    Route::delete('contacts/{id}', [ContactController::class, 'destroy']);

    // GET & UPDATE current authenticated user
    Route::get('user', [UserController::class, 'getUser']);
    Route::put('user', [UserController::class, 'updateUser']);

    // Events
    Route::get('events', [EventController::class, 'preview']);
    Route::get('getEvent/{id}', [EventController::class, 'getEvent']);
    Route::post('postEvent', [EventController::class, 'store']);
    Route::put('putEvent/{id}', [EventController::class, 'update']);
    Route::delete('deleteEvent/{id}', [EventController::class, 'destroy']);

    // Logout
    Route::post('logout', [AuthController::class, 'logout']);


});


Route::group(['prefix' => 'eventadmin', 'middleware' => ['auth:sanctum', 'event_admin']], function() {

});


Route::group(['prefix' => 'responsable', 'middleware' => ['auth:sanctum', 'responsable']], function() {


});


Route::group(['prefix' => 'sessionadmin', 'middleware' => ['auth:sanctum', 'session_admin']], function() {

});


Route::group(['prefix' => 'user', 'middleware' => ['auth:sanctum', 'user']], function() {

});


















Route::resource('committee_member', CommitteeMemberController::class);
