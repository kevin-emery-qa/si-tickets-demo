import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly baseUrl: string = "https://www.sitickets.com/";
    readonly page: Page;
    
    readonly topLogo: Locator;

    constructor(page: Page) {
        this.page = page;

        this.topLogo = page.locator('img[src*=si_tickets_logo]').first();
    }

    public async validateHeader(): Promise<void> {
        await expect(this.topLogo).toBeVisible();
    }
}