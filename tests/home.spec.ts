import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

let homePage: HomePage;

test.describe('validate the public-facing SI tickets website', () => {
  test.beforeEach(async({ page }) => {
    homePage = new HomePage(page);
    await page.goto(homePage.baseUrl);
  });

  test('validate home page load', async ({ page }) => {
    // Expect page title to contain the "Quality" substring
    await expect(page).toHaveTitle(/.*SI Tickets.+/);
    await homePage.validateNavigationVisibility();
  });
});
