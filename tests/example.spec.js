// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  
  await page.getByRole('button', { name: 'Connect Wallet' }).click();
  await page.getByRole('spinbutton', { name: 'Amount to deposit:' }).click();
  await page.getByRole('spinbutton', { name: 'Amount to deposit:' }).fill('12');
  await page.getByRole('combobox', { name: 'Currency to Deposit:' }).click();
  await page.getByRole('option', { name: 'MYR' }).click();
  await page.getByRole('button', { name: 'Calculate' }).click();


  await expect(page.getByText('123.45')).toBeVisible();
});