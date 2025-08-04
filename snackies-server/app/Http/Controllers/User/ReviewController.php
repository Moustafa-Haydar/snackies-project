<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\User\ReviewService;
use App\Traits\ResponseTrait;

class ReviewController extends Controller
{
    use ResponseTrait;

    public function createReview(Request $request)
    {
        try {
            $request->validate([
                'user_id' => 'required|integer|exists:users,id',
                'item_id' => 'required|integer|exists:items,id',
                'text' => 'required|string|max:1000',
                'rating' => 'required|integer|min:1|max:5'
            ]);

            $result = ReviewService::createReview(
                $request->user_id,
                $request->item_id,
                $request->text,
                $request->rating
            );

            if ($result === 'invalid_rating') {
                return $this->responseJSON(null, "Rating must be between 1 and 5", 400);
            }

            if ($result === 'user_not_found') {
                return $this->responseJSON(null, "User not found", 404);
            }

            if ($result === 'item_not_found') {
                return $this->responseJSON(null, "Item not found", 404);
            }

            if ($result === 'already_reviewed') {
                return $this->responseJSON(null, "You have already reviewed this item", 400);
            }

            return $this->responseJSON($result, "Review created successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function getItemReviews(Request $request, $itemId)
    {
        try {
            $reviews = ReviewService::getItemReviews($itemId);
            return $this->responseJSON($reviews, "Item reviews retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function getUserReviews(Request $request, $userId)
    {
        try {
            $reviews = ReviewService::getUserReviews($userId);
            return $this->responseJSON($reviews, "User reviews retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function getFeaturedReviews(Request $request)
    {
        try {
            $reviews = ReviewService::getFeaturedReviews();
            return $this->responseJSON($reviews, "Featured reviews retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function updateReview(Request $request, $reviewId)
    {
        try {
            $request->validate([
                'user_id' => 'required|integer|exists:users,id',
                'text' => 'required|string|max:1000',
                'rating' => 'required|integer|min:1|max:5'
            ]);

            $result = ReviewService::updateReview(
                $reviewId,
                $request->user_id,
                $request->text,
                $request->rating
            );

            if (!$result) {
                return $this->responseJSON(null, "Review not found", 404);
            }

            if ($result === 'invalid_rating') {
                return $this->responseJSON(null, "Rating must be between 1 and 5", 400);
            }

            if ($result === 'unauthorized') {
                return $this->responseJSON(null, "You can only update your own reviews", 403);
            }

            return $this->responseJSON($result, "Review updated successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

    public function deleteReview(Request $request, $reviewId)
    {
        try {
            $request->validate([
                'user_id' => 'required|integer|exists:users,id'
            ]);

            $result = ReviewService::deleteReview($reviewId, $request->user_id);

            if (!$result) {
                return $this->responseJSON(null, "Review not found", 404);
            }

            if ($result === 'unauthorized') {
                return $this->responseJSON(null, "You can only delete your own reviews", 403);
            }

            return $this->responseJSON(null, "Review deleted successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error: " . $e->getMessage(), 500);
        }
    }

} 