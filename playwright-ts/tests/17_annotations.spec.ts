import { test, expect } from '@playwright/test';

test.skip('Skipped test', async () => {
  console.log('This test is skipped and will not be executed');
});

test('Skipped test with condition', async ({browserName}) => {
    test.skip(browserName === 'webkit', 'This test is skipped on WebKit browser');
  console.log('This test is skipped and will not be executed');
});

test.fail('Not yet ready', async () => {
  console.log('Failed sample test');
});

test('fail in WebKit', async ({ page, browserName }) => {
  test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');
});

test.fixme('Yet to fix the test', async () => {
console.log('This test is marked as fixme and will be executed but reported as a known issue');
});

test('slow test', async ({ page }) => {
test.slow(); // Will increase the timeout = default timeout * 3 times // For eg - default timeout is 30 seconds, it will be increased to 90 seconds for this test
  console.log('This test is marked as slow and will be executed but reported as a slow test');
});

// Conditionally mark as slow only when running on WebKit (Safari).
test('slow in WebKit', async ({ page, browserName }) => {
  test.slow(browserName === 'webkit', 'This feature is slow on Mac');
  console.log('This test is marked as slow and will be executed but reported as a slow test');
});

// test.only('Executes Only this test', async ({ page }) => {
//   console.log("Only Test got executed");
//   // Add code here - only this will run in the suite due to test.only()
// });
