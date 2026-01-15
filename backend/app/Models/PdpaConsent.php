<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class PdpaConsent extends Model
{
    use HasUuids;

    protected $fillable = [
        'anonymized_identifier',
        'consent_type',
        'ip_address',
        'user_agent',
        'wording_hash',
        'consented_at',
    ];

    protected $casts = [
        'consented_at' => 'datetime',
    ];
}
