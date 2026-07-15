import { test, expect, type Page } from '@playwright/test'

declare global {
  interface Window {
    _paq?: unknown[][]
  }
}

const getPaq = (page: Page) => page.evaluate(() => window._paq ?? [])

const waitForTracking = (page: Page) =>
  page.waitForFunction(() => (window._paq?.length ?? 0) > 0)

test('on app load, the built plugin initializes tracking and tags _paq with the "react" source provider', async ({
  page
}) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await waitForTracking(page)

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['setTrackingSourceProvider', 'react'])
  )
})

test('clicking the Submit button pushes a "trackEvent" command to _paq', async ({
  page
}) => {
  await page.goto('/custom-event', { waitUntil: 'domcontentloaded' })
  await waitForTracking(page)
  const before = await getPaq(page)
  expect(before).not.toContainEqual(expect.arrayContaining(['trackEvent']))

  await page.getByRole('button', { name: 'Submit' }).click()

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['trackEvent'])
  )
})
