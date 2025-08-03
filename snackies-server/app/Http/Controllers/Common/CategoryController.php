<?php

namespace App\Http\Controllers\Common;
use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Http\Controllers\Controller;
use App\Services\Common\CategoryService;
use App\Models\Category;

class CategoryController extends Controller
{
    use ResponseTrait;

    function getCategories($id=null){
        try{
        $categories = CategoryService::getCategories($id);
          return $this->responseJSON($categories, "Categories retrieved successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error retrieving categories: " . $e->getMessage(), 500);
        }
    }


    function addCategory(Request $request){
        try{
            $category = new Category;
            $category = CategoryService::addCategory($category, $request);
            return $this->responseJSON($categories, "Category added successfully");
        } catch (\Exception $e) {
            return $this->responseJSON(null, "Error adding categories: " . $e->getMessage(), 500);
        }
    }
}
