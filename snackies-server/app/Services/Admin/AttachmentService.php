<?php

namespace App\Services\Admin;

use Illuminate\Http\Request;

class AttachmentService
{
    public static function base64ToImage (Request $request) {
        if (!file_exists(__DIR__ . "/../../../storage/app/public/$request->item_id/")) {
            mkdir(__DIR__ . "/../../../storage/app/public/$request->item_id/", 0777, true);
        }

        define('UPLOAD_DIR', __DIR__ . "/../../../storage/app/public/$request->item_id/");
        $encoded_data = $request->base64;
        $img = str_replace('data:image/jpeg;base64,', '', $encoded_data);
        $data = base64_decode($img);

        if (!$data) {
            return null;
        }

        $file_name = 'image_'.date('Y-m-d-H-i-s', time());

        $file  = UPLOAD_DIR . $file_name . '.webp';
        // $success = file_put_contents(__DIR__ . $file, $data);
        $success = file_put_contents($file, $data);

        // return __DIR__ . $file;
        return "http://localhost:8000/storage/$request->item_id/$file_name.webp";
    }
}
