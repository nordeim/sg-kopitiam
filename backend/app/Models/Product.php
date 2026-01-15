<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'stock_quantity',
        'category',
        'tags',
        'image_url',
        'is_active',
    ];

    protected $casts = [
        'price' => 'decimal:4',
        'tags' => 'array',
        'is_active' => 'boolean',
        'stock_quantity' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
