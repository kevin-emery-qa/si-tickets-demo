import { Page, Locator, expect } from '@playwright/test';
import { HomePage } from './home.page';

export class SiMainPage {
    readonly baseUrl: string = "https://www.si.com/";
    readonly page: Page;
    readonly ticketsHomePage: HomePage;

    readonly topLogo: Locator;
    readonly siTicketNav: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ticketsHomePage = new HomePage(page);

        this.topLogo = page.locator('.shadow-header img[alt=SI]');
        this.siTicketNav = page.locator('a[href*="sitickets.com"].h-full');
    }

    public async validatePageLoad(): Promise<void> {
        await expect(this.topLogo).toBeVisible();
    }

    public async navigateToSITickets(): Promise<void> {
        expect(this.page.url()).toContain(this.baseUrl);
        await this.siTicketNav.click();
        await this.ticketsHomePage.validateHeader();
        expect(this.page.url()).toContain((this.ticketsHomePage.baseUrl));
    }
}   