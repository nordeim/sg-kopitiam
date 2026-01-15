import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('Menu Page matches Design System', async ({ page }) => {
    await page.goto('/menu');
    await expect(page).toHaveScreenshot('menu-page.png', {
      maxDiffPixelRatio: 0.05, // 5% tolerance for animations
    });
  });

  test('Retro Components rendering', async ({ page }) => {
    await page.goto('/menu');
    // Snapshot specific component (e.g., First Menu Card) to verify styling
    const card = page.locator('article').first();
    await expect(card).toHaveScreenshot('menu-card.png');
  });
});
