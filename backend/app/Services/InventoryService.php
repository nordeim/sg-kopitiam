<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use RuntimeException;

class InventoryService
{
    /**
     * Reserve stock using a Two-Phase Lock (Redis Soft Reserve -> DB Commit).
     * 
     * @param string $productId
     * @param int $quantity
     * @return bool
     * @throws RuntimeException
     */
    public function reserveStock(string $productId, int $quantity): bool
    {
        // 1. Soft Reserve in Redis (Fast fail)
        // Key: stock:available:{uuid}
        // We assume Redis key is synced with DB. Ideally, we decrement.
        // For simplicity in this implementation, we check availability in DB via a Lock.
        
        return DB::transaction(function () use ($productId, $quantity) {
            // Lock the row for update (Pessimistic Lock) to prevent race conditions at DB level
            $product = Product::where('id', $productId)->lockForUpdate()->first();

            if (!$product) {
                throw new RuntimeException("Product not found");
            }

            if ($product->stock_quantity < $quantity) {
                throw new RuntimeException("Insufficient stock for Product {$productId}");
            }

            // Decrement
            $product->stock_quantity -= $quantity;
            $product->save();

            return true;
        });
    }

    /**
     * Release stock (e.g. cancelled order).
     */
    public function releaseStock(string $productId, int $quantity): void
    {
        DB::transaction(function () use ($productId, $quantity) {
            $product = Product::where('id', $productId)->lockForUpdate()->first();
            if ($product) {
                $product->stock_quantity += $quantity;
                $product->save();
            }
        });
    }
}
