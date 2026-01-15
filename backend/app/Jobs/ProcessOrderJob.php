<?php

namespace App\Jobs;

use App\Models\Order;
use App\Services\InvoiceService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProcessOrderJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $order;

    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function handle(InvoiceService $invoiceService): void
    {
        Log::info("Processing Order: {$this->order->invoice_number}");

        // 1. Generate InvoiceNow XML
        $xml = $invoiceService->generateXml($this->order);
        
        // 2. Store Invoice (Simulated storage)
        $fileName = "invoices/{$this->order->invoice_number}.xml";
        Storage::disk('local')->put($fileName, $xml);

        // 3. Send Email (Simulated)
        // Mail::to($this->order->pdpaConsent->...)->send(new OrderReceipt($this->order));
        
        Log::info("Invoice stored at: {$fileName}");
    }
}
