<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasUuids;

    protected $fillable = [
        'invoice_number',
        'status',
        'subtotal',
        'gst_amount',
        'total_amount',
        'pdpa_consent_id',
    ];

    protected $casts = [
        'subtotal' => 'decimal:4',
        'gst_amount' => 'decimal:4',
        'total_amount' => 'decimal:4',
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function pdpaConsent()
    {
        return $this->belongsTo(PdpaConsent::class);
    }

    /**
     * Calculate totals with 9% GST logic (inclusive or exclusive depending on config, usually inclusive for F&B in SG)
     * Here we assume prices are Tax Inclusive for display, but we store the breakdown.
     * Formula: 
     *  Total = Subtotal + GST
     *  If Price is Inclusive:
     *    GST = Total - (Total / 1.09)
     *    Subtotal = Total / 1.09
     */
    public static function calculateBreakdown(float $totalAmount): array
    {
        $gstRate = 0.09;
        $subtotal = $totalAmount / (1 + $gstRate);
        $gst = $totalAmount - $subtotal;

        return [
            'subtotal' => round($subtotal, 4),
            'gst_amount' => round($gst, 4),
            'total_amount' => round($totalAmount, 4),
        ];
    }
}
