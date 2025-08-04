<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Redis;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderInvoiceMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $order;

    public function __construct($user, $order)
    {
        $this->user = $user;
        $this->order = $order;
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.OrderInvoiceMail',
        );
    }
}
