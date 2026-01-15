<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
        'address',
        'postal_code',
        'features',
        'operating_hours',
    ];

    protected $casts = [
        'features' => 'array',
        'operating_hours' => 'array',
    ];
}
