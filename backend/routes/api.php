// Append Admin Routes
Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/stats', [App\Http\Controllers\Api\Admin\DashboardController::class, 'stats']);
    // Placeholder for resource routes if we implemented full CRUD controllers
    // Route::apiResource('orders', OrderController::class);
});
