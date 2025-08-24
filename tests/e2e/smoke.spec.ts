import { test, expect } from '@playwright/test';

test.describe('Homepage Smoke Test', () => {
  test('should load the homepage and display the hero section', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');

    // Check that the main heading (the name) is visible
    const nameHeading = page.getByRole('heading', { name: 'Jules' });
    await expect(nameHeading).toBeVisible();

    // Check that the main headline is visible
    const mainHeadline = page.getByRole('heading', { name: 'Creative Developer & Designer' });
    await expect(mainHeadline).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Click the "Work" link and verify the URL
    await page.getByRole('link', { name: 'Work' }).click();
    await expect(page).toHaveURL('/work');

    // Click the "About" link and verify the URL
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');

    // Click the "Contact" link and verify the URL
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');

    // Click the "Home" link (logo/name) and verify the URL
    await page.getByRole('link', { name: 'Jules' }).click();
    await expect(page).toHaveURL('/');
  });
});
