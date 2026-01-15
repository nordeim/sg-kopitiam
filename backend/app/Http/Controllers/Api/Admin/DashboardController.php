<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function stats()
    {
        // Calculate Net Sales (Excluding 9% GST)
        // Stored total_amount includes GST.
        // Net = Total / 1.09
        
        $totalRevenue = Order::where('status', 'completed')->sum('total_amount');
        $netRevenue = $totalRevenue / 1.09;

        $stats = [
            'total_revenue' => round($totalRevenue, 2),
            'net_revenue' => round($netRevenue, 2),
            'total_orders' => Order::count(),
            'pending_orders' => Order::where('status', 'pending')->count(),
            'low_stock_items' => Product::where('stock_quantity', '<', 10)->count(),
            'sales_chart' => $this->getSalesChart(),
            'top_products' => $this->getTopProducts(),
        ];

        return response()->json($stats);
    }

    private function getSalesChart()
    {
        // Simple daily aggregation for last 7 days
        return Order::select(DB::raw('DATE(created_at) as date'), DB::raw('sum(total_amount) as total'))
            ->where('created_at', '>=', now()->subDays(7))
            ->groupBy('date')
            ->orderBy('date')
            ->get();
    }

    private function getTopProducts()
    {
        return DB::table('order_items')
            ->join('products', 'order_items.product_id', '=', 'products.id')
            ->select('products.name', DB::raw('sum(order_items.quantity) as total_qty'))
            ->groupBy('products.id', 'products.name')
            ->orderByDesc('total_qty')
            ->limit(5)
            ->get();
    }
}
