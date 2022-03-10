import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    // Go to https://c23.qbo.intuit.com/qbo23/samplecompany/validated?SKU=7&bc=QBP-T39
    await page.goto('https://c23.qbo.intuit.com/qbo23/samplecompany/validated?SKU=7&bc=QBP-T39');
    // Click span[role="checkbox"]
    await page.frameLocator('iframe[role="presentation"]').locator('span[role="checkbox"]').click();
    // Click text=Continue
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://app.qbo.intuit.com/app/homepage' }*/),
        page.locator('text=Continue').click()
    ]);
});