<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Mail;
use App\Mail\OrderInvoiceMail;
use App\Models\User;
use Illuminate\Support\Facades\Redis;


use Illuminate\Support\Facades\Log;

class AutoOrderInvoiceMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:auto-order-invoice-mail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        // debug
        Log::info('Starting invoice email job.');

        $user = User::where('email', 'dhayek92@gmail.com')->first();

        // debug
        Log::info($user);

        if (!$user) {
            $this->error('user not found.');
            return;
        }

        $order = $user->orders()->latest()->first();

        if (!$order) {
            $this->error('No order found for user.');
            return;
        }

        // debug
        Log::info($order);

        Mail::to($user->email)->send(new OrderInvoiceMail($user, $order));
        $this->info('Invoice email sent successfully.');

        // debug
        Log::info(message: 'Invoice email sent successfully');

        return;
    }
}
