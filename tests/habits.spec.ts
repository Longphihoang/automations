import { test, expect } from '@playwright/test';

test('habits', async ({ page }) => {
  // Go to https://www.virginpulse.com/
  await page.goto('https://www.virginpulse.com/');
  // Click button:has-text("Accept")
  await page.locator('button:has-text("Accept")').click();
  // Click text=Member Login
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://app.member.virginpulse.com/#/home' }*/),
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
  await page.goto("https://app.member.virginpulse.com/#/healthyhabits");
  // Click text=Healthy Habits 3 >> img
  // Click #tracker-6059-track-yes
  await page.locator('#tracker-6059-track-yes').click();
  // Click #tracker-6060-track-yes
  await page.locator('#tracker-6060-track-yes').click();
  // Click #tracker-6059-track-yes
  await page.locator('#tracker-6059-track-yes').click();
  // Click #tracker-2861-track-yes
  await page.locator('#tracker-2861-track-yes').click();
  // Click #tracker-2746-track-yes
  await page.locator('#tracker-2746-track-yes').click();
  // Click #tracker-2863-track-yes
  await page.locator('#tracker-2863-track-yes').click();
  // Click #tracker-683-track-yes
  await page.locator('#tracker-683-track-yes').click();
  // Click #tracker-2862-track-yes
  await page.locator('#tracker-2862-track-yes').click();
  // Click #tracker-2747-track-yes
  await page.locator('#tracker-2747-track-yes').click();
  // Click #tracker-2740-track-yes
  await page.locator('#tracker-2740-track-yes').click();
  // Click #tracker-656-track-yes
  await page.locator('#tracker-656-track-yes').click();
  // Click [placeholder="Enter\ your\ weight\ \(lbs\)"]
  await page.locator('[placeholder="Enter\\ your\\ weight\\ \\(lbs\\)"]').click();
  // Fill [placeholder="Enter\ your\ weight\ \(lbs\)"]
  await page.locator('[placeholder="Enter\\ your\\ weight\\ \\(lbs\\)"]').fill('180');
  // Click #track-weight
  await page.locator('#track-weight').click();
  // Click #tracker-627-track-yes
  await page.locator('#tracker-627-track-yes').click();
  // Click #tracker-635-track-yes
  await page.locator('#tracker-635-track-yes').click();
  // Click [aria-label="Enter\ hours\ of\ sleep"]
  await page.locator('[aria-label="Enter\\ hours\\ of\\ sleep"]').click();
  // Fill [aria-label="Enter\ hours\ of\ sleep"]
  await page.locator('[aria-label="Enter\\ hours\\ of\\ sleep"]').fill('8');
  // Click #track-sleep
  await page.locator('#track-sleep').click();
  // Click [aria-label="happy"] img
  await page.locator('[aria-label="happy"] img').click();
  // Click text=Press the down arrow to navigate through options.On entering the text in the fol >> i[role="button"]
  await page.locator('text=Press the down arrow to navigate through options.On entering the text in the fol >> i[role="button"]').click();
  // Click #searched-activity-1009987
  await page.locator('#searched-activity-1009987').click();
  // Fill [placeholder="\30 "]
  await page.locator('[placeholder="\\30 "]').fill('45');
  // Click #steps-converter-submit
  await page.locator('#steps-converter-submit').click();
  // Click #tracker-13-track-yes
  await page.locator('#tracker-13-track-yes').click();
  // Click #tracker-44-track-yes
  await page.locator('#tracker-44-track-yes').click();
});