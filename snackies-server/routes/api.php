<?php

use App\Http\Controllers\User\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Common\AuthController;
use App\Http\Controllers\Common\CategoryController;
use App\Http\Controllers\Admin\AttachmentController;
use App\Http\Controllers\User\CartController;
use App\Http\Controllers\User\OrderController;
use App\Http\Controllers\User\ReviewController;
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

        Route::get("/categories/{id?}", [CategoryController::class, "getCategories"]);

        Route::post("/add_to_cart", [CartController::class, "addToCart"]);
        Route::post("/upload_image", [AttachmentController::class, "uploadImage"]);

        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);
        Route::post("/update/{id}", [UserController::class, "updateUser"]);

        Route::get("/notifications/{id}", [UserController::class, "getNotifications"]);
        Route::post("/mark_as_read", [UserController::class, "markAsRead"]);

        Route::get("/get_cart/{id}", [CartController::class, "getCartByUserId"]);
        // ID being passed is user ID, get their cart

        Route::get("/place_order/{id}", [OrderController::class, "placeOrder"]);
        // The ID being passed here is the user ID, since every user only has one cart, so get that user's cart based on their id, then turn it into an order

        Route::get("/users/{id?}", [UserController::class, "getUsers"]);
        // Optional parameter: if ID is provided, get specific user; otherwise get all users


        Route::put("/orders/{orderId}/status", [OrderController::class, "updateOrderStatus"]);
        // Update order status
        Route::delete("/orders/{orderId}", [OrderController::class, "cancelOrder"]);
        //Cancel an order (cannot cancel delivered orders)


        Route::get("/orders/user/{userId}", [OrderController::class, "getUserOrders"]);
        //Get all orders for a specific user
        Route::get("/orders/status", [OrderController::class, "getAllOrdersByStatus"]);
        //Get all order by status from all users
        Route::get("/orders/{orderId}", [OrderController::class, "getOrderDetails"]);


        // Create a new review for an item
        Route::post("/reviews", [ReviewController::class, "createReview"]);

        // Get all reviews for a specific item
        Route::get("/reviews/item/{itemId}", [ReviewController::class, "getItemReviews"]);

        // Get all reviews by a specific user
        Route::get("/reviews/user/{userId}", [ReviewController::class, "getUserReviews"]);

        // Get featured reviews (high-rated reviews)
        Route::get("/reviews/featured", [ReviewController::class, "getFeaturedReviews"]);

        // Update an existing review (only by review owner)
        Route::put("/reviews/{reviewId}", [ReviewController::class, "updateReview"]);

        // Delete a review (only by review owner)
        Route::delete("/reviews/{reviewId}", [ReviewController::class, "deleteReview"]);

    });


});

