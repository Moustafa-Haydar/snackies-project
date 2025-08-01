<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Admin\AttachmentService;

class AttachmentController extends Controller
{
    public function uploadImage (Request $request) {
        return $this->responseJSON(AttachmentService::base64ToImage($request));
    }
}
