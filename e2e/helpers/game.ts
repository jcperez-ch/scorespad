import { Page } from '@playwright/test';

export async function clearDatabase(page: Page) {
  await page.context().storageState({ indexedDB: true });
}

export async function createGame(
  page: Page,
  name: string,
  gameType = 'Continental Card Game',
  participantType = 'Player',
) {
  await page.getByRole('button', { name: 'Create Game' }).click();
  await page.getByLabel('Game Name').fill(name);

  // Select game type
  await page.locator('#game-type-select').click();
  await page.getByRole('option', { name: gameType }).click();

  // Select participant type
  await page.getByRole('button', { name: new RegExp(participantType) }).click();

  await page.getByRole('button', { name: 'Create Game' }).last().click();
  await page.waitForURL(/\/games\/[^/]+\/setup$/);
}
