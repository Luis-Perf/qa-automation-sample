import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://example.com/login'); // Substitua pela URL real
  await loginPage.login('user1', 'password123');
  const dashboard = await page.locator('#dashboard');
  await expect(dashboard).toBeVisible();
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://example.com/login');
  await loginPage.login('user1', 'wrongpassword');
  const errorMessage = await page.locator('#error');
  await expect(errorMessage).toHaveText('Invalid credentials');
});