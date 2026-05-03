import { Page, expect, test } from '@playwright/test';

async function clearDatabase(page: Page) {
  await page.context().storageState({ indexedDB: true });
}

async function createGame(
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

test.describe('game lifecycle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await clearDatabase(page);
    await page.reload();
    await page.waitForLoadState('networkidle');
  });

  test('creates a new game with team participant type', async ({ page }) => {
    await createGame(page, 'Test Game', 'Continental Card Game', 'Team');

    // Should redirect to setup page
    await expect(page).toHaveURL(/\/games\/[^/]+\/setup$/);
    await expect(page.getByRole('button', { name: 'Add Participant' })).toBeVisible();
  });

  test('creates a new game with player participant type', async ({ page }) => {
    await createGame(page, 'Player Game', 'Other', 'Player');

    await expect(page).toHaveURL(/\/games\/[^/]+\/setup$/);
    await expect(page.getByRole('button', { name: 'Add Participant' })).toBeVisible();
  });

  test('renames a game', async ({ page }) => {
    await createGame(page, 'Original Game');

    // Go to game lobby
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForURL(/\/games\/[^/]+$/);

    // Open game menu and click rename
    await page.getByLabel('Game Menu').click();
    await page.getByRole('menuitem', { name: 'Rename' }).click();

    // Clear and type new name
    await page.getByLabel('Game Name').clear();
    await page.getByLabel('Game Name').fill('Renamed Game');
    await page.getByRole('button', { name: 'Rename Game' }).click();

    // Go back to landing and verify
    await page.goto('/');
    await expect(page.getByText('Renamed Game')).toBeVisible();
  });

  test('deletes a game', async ({ page }) => {
    await createGame(page, 'Game To Delete');

    // Go to game lobby
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForURL(/\/games\/[^/]+$/);

    // Open game menu and click delete
    await page.getByLabel('Game Menu').click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();

    // Confirm deletion
    await expect(page.getByText('Are you sure you want to remove this game?')).toBeVisible();
    await page.getByRole('button', { name: 'Delete' }).click();

    // Should redirect to landing with no games
    await expect(page).toHaveURL('/scorespad/');
    await expect(page.getByText('There are no games to display')).toBeVisible();
  });
});
