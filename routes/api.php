<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CommitteeMemberController;

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

// 'prefix' => 'admin',

Route::resource('contact', ContactController::class);

Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum', 'admin']], function() {
    // Route::get('contacts', [ContactController::class, 'index']);
    // Route::post('logout', [AuthController::class, 'logout']);
});

// 'prefix' => 'user',

Route::group(['prefix' => 'user', 'middleware' => ['auth:sanctum', 'user']], function() {
    // Route::get('contacts', [ContactController::class, 'index']);
    // Route::post('logout', [AuthController::class, 'logout']);
});


Route::resource('committee_member', CommitteeMemberController::class);
