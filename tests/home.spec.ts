import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SiMainPage as SiHomePage } from '../pages/si-main.page';

let homePage: HomePage;
let siHomePage: SiHomePage;

test.describe('validate the public-facing SI tickets website', () => {
  test.beforeEach(async({ page }) => {
    homePage = new HomePage(page);
    siHomePage = new SiHomePage(page);
  });

  test('validate home page load', async ({ page }) => {
    // Expect page title to contain the "Quality" substring
    await page.goto(homePage.baseUrl);
    await expect(page).toHaveTitle(/.*SI Tickets.+/);
    await homePage.validateHeader();
  });

  test('validate navigation from SI main site to SI tickets', async ({ page }) => {
    await page.goto(siHomePage.baseUrl, {waitUntil: 'domcontentloaded'});
    await siHomePage.validatePageLoad();
    await siHomePage.navigateToSITickets();
  });
});
