<?php

namespace App\Services;

use App\Models\PdpaConsent;
use Illuminate\Http\Request;

class PdpaService
{
    /**
     * Create a pseudonymized identifier from PII (e.g. email).
     */
    public function pseudonymize(string $identifier): string
    {
        // Use a pepper/salt from config
        $salt = config('app.key'); 
        return hash('sha256', $identifier . $salt);
    }

    /**
     * Log consent for audit trail.
     */
    public function logConsent(string $identifier, string $type, string $wording, Request $request): PdpaConsent
    {
        return PdpaConsent::create([
            'anonymized_identifier' => $this->pseudonymize($identifier),
            'consent_type' => $type,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'wording_hash' => hash('sha256', $wording),
            'consented_at' => now(),
        ]);
    }
}
