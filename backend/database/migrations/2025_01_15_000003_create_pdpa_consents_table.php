<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pdpa_consents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('anonymized_identifier'); // SHA256 hash of email/phone
            $table->string('consent_type'); // 'marketing', 'terms', etc.
            $table->string('ip_address')->nullable();
            $table->string('user_agent')->nullable();
            $table->string('wording_hash'); // Hash of the specific text agreed to
            $table->timestamp('consented_at');
            $table->timestamps();

            $table->index('anonymized_identifier');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pdpa_consents');
    }
};
