<?php

namespace Tests\Feature;

use App\Models\Order;
use Tests\TestCase;

class OrderPrecisionTest extends TestCase
{
    /** @test */
    public function it_calculates_gst_with_high_precision()
    {
        // Scenario: Item price $3.50 (Inclusive of 9% GST)
        // Formula: 
        // Subtotal = 3.50 / 1.09 = 3.211009...
        // GST = 3.50 - 3.211009... = 0.28899...
        
        $breakdown = Order::calculateBreakdown(3.50);

        // We store as DECIMAL(10,4)
        $this->assertEquals(3.2110, $breakdown['subtotal']);
        $this->assertEquals(0.2890, $breakdown['gst_amount']);
        $this->assertEquals(3.5000, $breakdown['total_amount']);
    }

    /** @test */
    public function it_stores_fractional_cents_correctly()
    {
        // Scenario: Bulk order calculation resulting in potential float drift
        // 3 items @ $1.15 = $3.45
        
        $breakdown = Order::calculateBreakdown(3.45);
        
        // 3.45 / 1.09 = 3.165137...
        $this->assertEquals(3.1651, $breakdown['subtotal']);
    }
}
