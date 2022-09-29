const { test, expect } = require('@playwright/test');


test.beforeAll(async () => {
    console.log('BEFORE ALL')
})

test('Test - 1', async ()=> {
        console.log('-------------')
        console.log('TEST - 1')
        console.log('-------------')
})

test('Test - 2', async ()=> {
        console.log('-------------')
        console.log('TEST - 2')
        console.log('-------------')
})

test('Test - 3', async ()=> {
        console.log('-------------')
        console.log('TEST - 3')
        console.log('-------------')
})

