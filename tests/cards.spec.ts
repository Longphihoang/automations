import {test} from "@playwright/test";

test('cards', async ({ page }) => {
    // Go to https://www.virginpulse.com/
    await page.goto('https://www.virginpulse.com/');
    // Click button:has-text("Accept")
    await page.locator('button:has-text("Accept")').click();
    // Click text=Member Login
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://iam.virginpulse.com/auth/realms/virginpulse/protocol/openid-connect/auth?client_id=genesis-ui&redirect_uri=https%3A%2F%2Fapp.member.virginpulse.com%2F&state=702e3b7a-f9bf-4442-89d0-3d4d4ed8ed79&response_mode=fragment&response_type=code&scope=openid&nonce=261e7ece-6b67-4012-82b7-8239c3fbd506' }*/),
        page.locator('text=Member Login').click()
    ]);
    // Click [placeholder="Enter\ your\ username"]
    await page.locator('[placeholder="Enter\\ your\\ username"]').click();
    // Fill [placeholder="Enter\ your\ username"]
    await page.locator('[placeholder="Enter\\ your\\ username"]').fill('3hq3zx8jnnwt55vwxwd14tn5w');
    // Click [placeholder="Enter\ your\ password"]
    await page.locator('[placeholder="Enter\\ your\\ password"]').click();
    // Fill [placeholder="Enter\ your\ password"]
    await page.locator('[placeholder="Enter\\ your\\ password"]').fill('Dominicdo1@');
    // Click text=Sign In
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://iam.virginpulse.com/auth/realms/virginpulse/login-actions/authenticate?execution=c68dac2a-2571-455e-861e-93e67a25d761&client_id=genesis-ui&tab_id=NcNCcs1OOa4' }*/),
        page.locator('text=Sign In').click()
    ]);
    // Click [aria-label="You\ don\'t\ have\ any\ unread\ cards\."] img >> nth=0
    await page.locator('[aria-label="You\\ don\\\'t\\ have\\ any\\ unread\\ cards\\."] img').first().click();
    // Click text=Power Off Sleeping Well You might be out, but your brain is hard at work while y >> button
    await page.locator('text=Power Off Sleeping Well You might be out, but your brain is hard at work while y >> button').click();
    // Click [aria-label="Next\ card"]
    await page.locator('[aria-label="Next\\ card"]').click();
    // Click #triggerCloseCurtain
    await page.locator('#triggerCloseCurtain').click();
});