<?php

use App\Http\Controllers\User\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Common\AuthController;
use App\Http\Controllers\Common\CategoryController;
use App\Http\Controllers\Admin\AttachmentController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\User\OrderController;
use App\Http\Controllers\User\UserController;


Route::group(["prefix" => "v0.1"], function () {
    Route::group(["middleware" => "auth:api"], function () {

        //AUTHENTICATED APIs
        Route::group(["prefix" => "user"], function () {
            Route::get("/items", [ItemController::class, "getAllItems"]);
            Route::get("/item_by_id", [ItemController::class, "getItemById"]);
            Route::get("/product_of_the_day", [ItemController::class, "getProductOfTheDay"]);
        });

        Route::group(["prefix" => "admin"], function () {
            Route::group(["middleware" => "auth:admin"], function () {

            });
        });

    });

    //UNAUTHENTICATED APIs
    Route::group(["prefix" => "guest"], function () {

        Route::get("/items/{id?}", [ItemController::class, "getAllItems"]);
        Route::get("/product_of_the_day", [ItemController::class, "getProductOfTheDay"]);

        Route::get("/categories/{id?}",[CategoryController::class,"getCategories"]);

        Route::post("/add_to_cart", [CartController::class, "addToCart"]);
        Route::post("/upload_image", [AttachmentController::class, "uploadImage"]);

        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);

        Route::get("/get_cart/{id}", [CartController::class, "getCartByUserId"]);
        // ID being passed is user ID, get their cart

        Route::get("/place_order/{id}", [OrderController::class, "placeOrder"]);
        // The ID being passed here is the user ID, since every user only has one cart, so get that user's cart based on their id, then turn it into an order

        Route::get("/users/{id?}", [UserController::class, "getUsers"]);
        // Optional parameter: if ID is provided, get specific user; otherwise get all users
    });


});

