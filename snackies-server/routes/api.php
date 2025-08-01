<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Common\AuthController;
use App\Http\Controllers\Admin\AttachmentController;

Route::get('/test', function () {
    return "Hello";
});

Route::post("/upload_image", [AttachmentController::class, "uploadImage"]);

Route::group(["prefix" => "v0.1"], function () {
    Route::group(["middleware" => "auth:api"], function () {

        //AUTHENTICATED APIs
        Route::group(["prefix" => "user"], function () {
            // Route::get("/items", [ItemController::class, "getAllItems"]);
            // Route::get("/item_by_id", [ItemController::class, "getItemById"]);
            // Route::get("/product_of_the_day", [ItemController::class, "getProductOfTheDay"]);

            // Route::get("/items", [ItemController::class, "getAllItems"]);
            // Route::get("/items", [ItemController::class, "getAllItems"]);
        });

        Route::group(["prefix" => "admin"], function () {
            Route::group(["middleware" => "auth:admin"], function () {

            });
        });

    });

    //UNAUTHENTICATED APIs
    Route::group(["prefix" => "guest"], function () {
        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);
    });

    Route::group(["prefix" => "test"], function () {
        Route::post("/upload_image", [AttachmentController::class, "uploadImage"]);
    });
});
