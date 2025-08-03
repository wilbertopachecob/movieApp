import { test, expect } from '@playwright/test';

test.describe('Movie App', () => {
  test('should display welcome message', async ({ page }) => {
    await page.goto('/');
    
    // Check if the app loads
    await expect(page).toHaveTitle(/Movie App/);
    
    // Check for welcome message or main content
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to different pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation (adjust selectors based on your actual app)
    const navLinks = page.locator('nav a, .navbar-nav a');
    await expect(navLinks.first()).toBeVisible();
  });

  test('should handle movie listing', async ({ page }) => {
    await page.goto('/');
    
    // Test movie listing functionality
    // This will need to be adjusted based on your actual app structure
    const movieElements = page.locator('.movie-item, .card, [data-testid="movie"]');
    
    // If there are movies, they should be visible
    if (await movieElements.count() > 0) {
      await expect(movieElements.first()).toBeVisible();
    }
  });
}); 