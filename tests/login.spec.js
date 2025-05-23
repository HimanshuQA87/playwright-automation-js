import {test, expect} from '@playwright/test';



test('login to dummy application',async ({page}) =>{

    await page.goto('https://naveenautomationlabs.com/opencart/');

    await page.waitForTimeout(5000);
    await expect(page.locator('h3:has-text("Featured")')).toBeVisible();

} )