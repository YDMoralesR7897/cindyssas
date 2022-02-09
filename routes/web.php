<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return view('event.index');

})->middleware("auth");

Auth::routes();

Route::group(['middleware' => ['auth']], function() {

Route::get('/event', [App\Http\Controllers\EventoController::class, 'index']);

Route::get('/event/show', [App\Http\Controllers\EventoController::class, 'show']);

Route::post('/event/add', [App\Http\Controllers\EventoController::class, 'store']);

Route::post('/event/edit/{id}', [App\Http\Controllers\EventoController::class, 'edit']);

Route::post('/event/update/{evento}', [App\Http\Controllers\EventoController::class, 'update']);

Route::post('/event/delete/{id}', [App\Http\Controllers\EventoController::class, 'destroy']);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

});