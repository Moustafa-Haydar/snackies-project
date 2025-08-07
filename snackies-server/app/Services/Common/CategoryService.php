<?php

namespace App\Services\Common;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryService
{
    static function getCategories($id = null){
        if(!$id){
            return Category::all();
        }
        return Category::find($id);
    }

    static function addCategory($category, $data){
        $category->name = $data["name"];
        $category->description = $data["description"];
        $category->image_url = $data["image-url"];
        $category->save();
        return $category;
    }
}