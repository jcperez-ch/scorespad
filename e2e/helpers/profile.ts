import { Page, expect } from '@playwright/test';

export async function clearProfiles(page: Page) {
  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      const request = indexedDB.deleteDatabase('scorespad-db');
      request.onsuccess = () => resolve();
      request.onerror = () => resolve();
    });
  });
}

export async function createProfile(page: Page, name: string, footline: string = '') {
  await page.getByRole('button', { name: 'Create Profile' }).click();

  await page.getByLabel('Name').fill(name);
  if (footline) {
    await page.getByLabel('Fun fact or catchphrase').fill(footline);
  }

  await page.getByRole('button', { name: 'Create Profile' }).last().click();
  await expect(page).toHaveURL('/scorespad/profiles');
  // Wait for dialog to fully close
  await page.locator('role=dialog').waitFor({ state: 'detached', timeout: 2000 }).catch(() => {});
}
