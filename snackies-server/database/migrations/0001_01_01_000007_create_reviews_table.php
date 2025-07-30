<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id('reviewID');
            $table->foreignId('item_ID')->constrained('items', 'item_ID')->onDelete('cascade');
            $table->foreignId('user_ID')->constrained('users', 'user_ID')->onDelete('cascade');
            $table->text('text');
            $table->integer('rating')->unsigned()->comment('Rating from 1 to 5');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
}; 