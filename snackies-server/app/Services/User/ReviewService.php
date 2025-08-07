<?php

namespace App\Services\User;

use App\Models\Review;
use App\Models\Item;
use App\Models\User;
use Illuminate\Http\Request;

class ReviewService
{
    public static function createReview($userId, $itemId, $text, $rating)
    {
        // Validate rating
        if ($rating < 1 || $rating > 5) {
            return 'invalid_rating';
        }

        // Check if user exists
        $user = User::find($userId);
        if (!$user) {
            return 'user_not_found';
        }

        // Check if item exists
        $item = Item::find($itemId);
        if (!$item) {
            return 'item_not_found';
        }

        // Check if user has already reviewed this item
        $existingReview = Review::where('user_id', $userId)
                               ->where('item_id', $itemId)
                               ->first();
        
        if ($existingReview) {
            return 'already_reviewed';
        }

        // Create review
        $review = new Review();
        $review->user_id = $userId;
        $review->item_id = $itemId;
        $review->text = $text;
        $review->rating = $rating;
        $review->save();

        return $review->load(['user', 'item']);
    }

    public static function getItemReviews($itemId)
    {
        return Review::with(['user'])
                    ->where('item_id', $itemId)
                    ->orderBy('created_at', 'desc')
                    ->get();
    }

    public static function getUserReviews($userId)
    {
        return Review::with(['item'])
                    ->where('user_id', $userId)
                    ->orderBy('created_at', 'desc')
                    ->get();
    }

    public static function getFeaturedReviews()
    {
        return Review::with(['user', 'item'])
                    ->where('rating', '>=', 4)
                    ->orderBy('rating', 'desc')
                    ->orderBy('created_at', 'desc')
                    ->limit(7)
                    ->get();
    }

    public static function updateReview($reviewId, $userId, $text, $rating)
    {
        // Validate rating
        if ($rating < 1 || $rating > 5) {
            return 'invalid_rating';
        }

        $review = Review::find($reviewId);
        if (!$review) {
            return null;
        }

        // Check if user owns this review
        if ($review->user_id !== $userId) {
            return 'unauthorized';
        }

        $review->text = $text;
        $review->rating = $rating;
        $review->save();

        return $review->load(['user', 'item']);
    }

    public static function deleteReview($reviewId, $userId)
    {
        $review = Review::find($reviewId);
        if (!$review) {
            return null;
        }

        // Check if user owns this review
        if ($review->user_id !== $userId) {
            return 'unauthorized';
        }

        $review->delete();
        return 'deleted';
    }

} 