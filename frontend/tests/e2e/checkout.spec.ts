import { test, expect } from '@playwright/test';

test.describe('Checkout Flow', () => {
  test('Complete purchase flow with GST calculation', async ({ page }) => {
    // 1. Navigate to Menu
    await page.goto('/menu');
    await expect(page.getByRole('heading', { name: 'Our Signature Brews' })).toBeVisible();

    // 2. Add Item to Cart
    // Using the button for "Traditional Kopi" ($3.50)
    await page.locator('article').filter({ hasText: 'Traditional Kopi' }).getByRole('button', { name: 'Add to Cart' }).click();
    
    // Check toast feedback
    await expect(page.getByText('Added to Order')).toBeVisible();
    
    // Check Header Badge updates
    await expect(page.locator('header').getByText('1')).toBeVisible();

    // 3. Open Cart & Verify Financials
    await page.getByRole('button', { name: 'Shopping cart' }).click();
    await expect(page.getByText('Your Order')).toBeVisible();
    
    // Verification of GST (9%) for $3.50 item
    // Subtotal: 3.50 / 1.09 = 3.21
    // GST: 3.50 - 3.21 = 0.29
    await expect(page.getByText('Subtotal')).toBeVisible();
    await expect(page.getByText('S$ 3.21')).toBeVisible(); 
    await expect(page.getByText('S$ 0.29')).toBeVisible(); // GST
    await expect(page.getByText('S$ 3.50')).toBeVisible(); // Total

    // 4. Proceed to Checkout
    await page.getByRole('button', { name: 'Checkout Now' }).click();
    await expect(page).toHaveURL(/\/checkout/);

    // 5. Fill Details (Wizard Step 1)
    await page.getByPlaceholder('Uncle Lim').fill('Test User');
    await page.getByPlaceholder('lim@example.com').fill('test@example.com');
    await page.getByPlaceholder('+65 9123 4567').fill('+6591234567');
    
    // Test PDPA Blocking
    await page.getByRole('button', { name: 'Continue to Pickup' }).click();
    await expect(page.getByText('You must consent to proceed')).toBeVisible();
    
    // Consent & Continue
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Continue to Pickup' }).click();

    // 6. Pickup (Wizard Step 2)
    await page.getByText('Tiong Bahru Flagship').click();
    
    // Set time to future
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().slice(0, 16);
    await page.locator('input[type="datetime-local"]').fill(dateStr);
    
    await page.getByRole('button', { name: 'Review Order' }).click();

    // 7. Review (Wizard Step 3)
    await expect(page.getByText('Ready to Pay?')).toBeVisible();
    
    // Mock Payment Redirection
    await page.getByRole('button', { name: 'Pay with PayNow' }).click();
    
    // 8. Success Page
    await expect(page).toHaveURL(/\/order-confirmation/);
    await expect(page.getByText('Order Confirmed!')).toBeVisible();
    await expect(page.getByText('INV-MB-2024-')).toBeVisible();
  });
});
