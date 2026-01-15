// Append to existing routes
Route::post('/payment/intent', [App\Http\Controllers\Api\PaymentController::class, 'createIntent']);
Route::post('/webhook/stripe', [App\Http\Controllers\Api\PaymentController::class, 'webhook']);