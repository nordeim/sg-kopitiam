<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::active();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        return response()->json($query->paginate(20));
    }

    public function show($id)
    {
        return response()->json(Product::findOrFail($id));
    }
}
