import { test, expect } from '@playwright/test';

// Executed once before all tests in the file
test.beforeAll(async()=>{
    console.log('Before All');
});

test.beforeEach(async()=>{
    console.log('Before Each');
});

test('Test 1', async ({ }) => {
  console.log('Test 1');
});

test('Test 2', async ({ }) => {
  console.log('Test 2');
});

test.afterEach(async()=>{
    console.log('After Each');
});

// Executed once after all tests in the file have completed
test.afterAll(async()=>{
    console.log('After All');
});