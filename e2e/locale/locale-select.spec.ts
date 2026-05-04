import { expect, test } from '@playwright/test';

import { clearDatabase, createGame } from '../helpers/game';

test.describe('locale selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await clearDatabase(page);
    await page.reload();
    await page.waitForLoadState('networkidle');
  });

  test('changes language when there are no games', async ({ page }) => {
    // No games present - should show empty state
    await expect(page.getByText('There are no games to display')).toBeVisible();

    // Open settings menu
    await page.getByRole('button', { name: 'Settings' }).click();

    // Open language selector
    await page.getByRole('menuitem', { name: 'Change Language' }).click();

    // Select Spanish
    await page.locator('#locale-es').click();

    // Verify language changed
    await expect(page.getByRole('button', { name: 'Configuración' })).toBeVisible();
    await expect(page.getByText('No hay juegos que mostrar')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Crear juego' })).toBeVisible();
  });

  test('changes language when there are games', async ({ page }) => {
    // Create a game first
    await createGame(page, 'Language Test Game');

    // Go back to landing
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForURL(/\/games\/[^/]+$/);
    await page.goto('/');

    // Game should be visible with English text
    await expect(page.getByRole('button', { name: 'Settings' })).toBeVisible();

    // Open settings menu
    await page.getByRole('button', { name: 'Settings' }).click();

    // Open language selector
    await page.getByRole('menuitem', { name: 'Change Language' }).click();

    // Select Spanish
    await page.locator('#locale-es').click();

    // Verify language changed
    await expect(page.getByRole('button', { name: 'Configuración' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Crear juego' })).toBeVisible();
  });
});
