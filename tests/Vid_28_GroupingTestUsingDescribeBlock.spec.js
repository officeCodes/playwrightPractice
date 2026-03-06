/*
* We can group test using describe block
* */
import {test,expect} from "@playwright/test";

test.beforeAll(async()=>{
    console.log("This is beforeAll Hook...")
})
test.afterAll(async()=>{
    console.log("This is afterAll Hook...")
})
test.beforeEach(async()=>{
    console.log("This is beforeEach Hook...")
})
test.afterEach(async()=>{
    console.log("This is afterEach Hook...")
})


// Grouping Tests
test.describe('Group 1', ()=>{
    test('Test1', async ()=>{
        console.log("This is Test 1......")
    })
    test('Test2', async ()=>{
        console.log("This is Test 2......")
    })
})
test.describe('Group 2', ()=>{
    test('Test1', async ()=>{
        console.log("This is Test 3......")
    })
    test('Test2', async ()=>{
        console.log("This is Test 4......")
    })
})


/*
* This will only execute this group test
* */
// test.describe.only('only execute this test', async ({page})=>{
//
// })
/*
* This will Skip this group test
* */
// test.describe.skip('only execute this test', async ({page})=>{
//
// })