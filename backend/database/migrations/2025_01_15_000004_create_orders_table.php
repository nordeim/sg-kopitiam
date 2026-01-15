<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('invoice_number')->unique();
            $table->enum('status', ['pending', 'confirmed', 'completed', 'cancelled', 'refunded'])->default('pending');
            
            // Financials - Precision (10, 4) for 9% GST accuracy
            $table->decimal('subtotal', 10, 4);
            $table->decimal('gst_amount', 10, 4);
            $table->decimal('total_amount', 10, 4);
            
            // Customer Info (Minimal/Anonymized if needed, but usually operational data)
            // We link to PDPA consent for the marketing aspect
            $table->foreignUuid('pdpa_consent_id')->nullable()->constrained('pdpa_consents');
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
