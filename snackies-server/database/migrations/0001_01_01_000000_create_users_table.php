<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('user_ID');
            $table->string('f_name');
            $table->string('L_name');
            $table->string('hashedPassword');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->enum('role', ['admin', 'user'])->default('user');
            $table->timestamps();
        });



        
    }

 
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
