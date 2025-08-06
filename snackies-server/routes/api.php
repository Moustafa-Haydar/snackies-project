<?php

use App\Http\Controllers\Common\ItemController;
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

    // UNAUTHENTICATED APIs (Public Endpoints)
    Route::group(["prefix" => "guest"], function () {

        // AUTHENTICATION
        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);

        // PUBLIC PRODUCT & CATEGORY ENDPOINTS
        Route::get("/items/{id?}", [ItemController::class, "getAllItems"]);
        Route::get("/product_of_the_day", [ItemController::class, "getProductOfTheDay"]);
        Route::get("/categories/{id?}", [CategoryController::class, "getCategories"]);

        // PUBLIC REVIEW ENDPOINTS
        Route::get("/reviews/item/{itemId}", [ReviewController::class, "getItemReviews"]);
        Route::get("/reviews/featured", [ReviewController::class, "getFeaturedReviews"]);
    });

    // AUTHENTICATED APIs (Require JWT Token)
    Route::group(["middleware" => "auth:api"], function () {

        // USER-SPECIFIC ENDPOINTS
        Route::group(["prefix" => "user"], function () {

            // PRODUCTS
            Route::get("/items", [ItemController::class, "getAllItems"]);
            Route::get("/item_by_id", [ItemController::class, "getItemById"]);
            Route::get("/product_of_the_day", [ItemController::class, "getProductOfTheDay"]);

            // CART MANAGEMENT
            Route::post("/add_to_cart", [CartController::class, "addToCart"]);
            Route::get("/get_cart/{id}", [CartController::class, "getCartByUserId"]);

            // ORDER MANAGEMENT
            Route::get("/place_order/{id}", [OrderController::class, "placeOrder"]);
            Route::put("/orders/{orderId}/status", [OrderController::class, "updateOrderStatus"]);
            Route::delete("/orders/{orderId}", [OrderController::class, "cancelOrder"]);
            Route::get("/orders/user/{userId}", [OrderController::class, "getUserOrders"]);
            Route::get("/orders/status", [OrderController::class, "getAllOrdersByStatus"]);
            Route::get("/orders/{orderId}", [OrderController::class, "getOrderDetails"]);

            // REVIEW MANAGEMENT
            Route::post("/reviews", [ReviewController::class, "createReview"]);
            Route::get("/reviews/user/{userId}", [ReviewController::class, "getUserReviews"]);
            Route::put("/reviews/{reviewId}", [ReviewController::class, "updateReview"]);
            Route::delete("/reviews/{reviewId}", [ReviewController::class, "deleteReview"]);

            // USER PROFILE
            Route::post("/update/{id}", [UserController::class, "updateUser"]);
            Route::get("/users/{id?}", [UserController::class, "getUsers"]);

            // FILE UPLOAD
            Route::post("/upload_image", [AttachmentController::class, "uploadImage"]);

            // Notifications
            Route::get("/notifications/{id?}", [UserController::class, "getNotifications"]);
            Route::post("/mark_as_read", [UserController::class, "markAsRead"]);
        });

        // ADMIN-ONLY ENDPOINTS
        Route::group(["prefix" => "admin"], function () {
            Route::group(["middleware" => "auth:admin"], function () {
                Route::get("/users", [UserController::class, "getAllUsers"]);
                Route::get("/products", [ItemController::class, "getAllProducts"]);
                Route::get("/orders", [OrderController::class, "getAllOrders"]);
            });
        });
    });
});

