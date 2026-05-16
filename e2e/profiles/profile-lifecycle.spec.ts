import { expect, test } from '@playwright/test';

import { createProfile } from '../helpers/profile';

test.describe('profile lifecycle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // Dismiss "new version" snackbar if it appears within 2s
    await page
      .getByRole('button', { name: 'here' })
      .click({ timeout: 2000 })
      .catch(() => {});
    // Navigate to profiles via settings menu
    await page.getByRole('button', { name: 'Settings' }).click();
    await page.getByRole('menuitem', { name: 'Profiles' }).click();
    await page.waitForURL(/\/profiles$/);
  });

  test('creates a new profile from empty state', async ({ page }) => {
    // Empty state should be visible
    await expect(page.getByText('No profiles yet, create one to get started!')).toBeVisible();

    await createProfile(page, 'Changoleon', 'Hello World');

    // Profile should appear in the list
    await expect(page.getByText('Changoleon')).toBeVisible();
    await expect(page.getByText('Hello World')).toBeVisible();
  });

  test('creates a new profile using FAB', async ({ page }) => {
    // Create first profile
    await createProfile(page, 'FirstUser');
    await expect(page.getByText('FirstUser')).toBeVisible();

    // Create second profile using FAB
    await page.getByRole('button', { name: 'Create Profile' }).first().click();
    await page.getByLabel('Name').fill('SecondUser');
    await page.getByLabel('Fun fact or catchphrase').fill('Another footline');
    await page.getByRole('button', { name: 'Create Profile' }).last().click();
    await expect(page).toHaveURL('/scorespad/profiles');
    await page
      .locator('role=dialog')
      .waitFor({ state: 'detached', timeout: 2000 })
      .catch(() => {});

    // Both profiles should be visible
    await expect(page.getByText('FirstUser')).toBeVisible();
    await expect(page.getByText('SecondUser')).toBeVisible();
  });

  test('deletes a profile', async ({ page }) => {
    // Create a profile
    await createProfile(page, 'UserToDelete');
    await expect(page.getByText('UserToDelete')).toBeVisible();

    // Open profile menu
    await page.getByRole('button', { name: 'Edit' }).first().click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();

    // Confirm deletion
    await expect(page.getByText('Are you sure you want to remove this profile?')).toBeVisible();
    await page.getByRole('button', { name: 'Delete' }).click();

    // Profile should be gone
    await expect(page.getByText('UserToDelete')).not.toBeVisible();
    await expect(page.getByText('No profiles yet, create one to get started!')).toBeVisible();
  });
});
