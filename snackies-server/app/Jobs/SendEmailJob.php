<?php
namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Mail\OrderInvoiceMail;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Redis;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $userId;
    protected $orderId;
    protected $mailTo;

    public function __construct($mailTo, $userId, $orderId)
    {
        $this->mailTo = $mailTo;
        $this->userId = $userId;
        $this->orderId = $orderId;
    }

    public function handle()
    {
        try {
            $user = User::findOrFail($this->userId);
            $order = Order::findOrFail($this->orderId);

            $mailable = new OrderInvoiceMail($user, $order);

            Mail::to($this->mailTo)->send($mailable);

            Log::info("Mail sent successfully to " . $user->first_name . " " . $user->last_name . "!");

        } catch (\Exception $e) {
            Log::error('Mail Sending Failed | ' . $e->getMessage());
        }
    }

}
