// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// First I will create a "describe" statement that will contain the function "divisibleBYTHREE"

// Then I will create an "it" statement describing that this particular function will produce the desired statment if the numbers below are divisible by three

// Finally I will create two expect statements that will call the function and produce the desired statement based on if the number is divisible by three or not.

describe ("divisibleByThree", () => {
    it ("returns a particular statement if the value in the object is divible by three or not", () => {
        expect (divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect (divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect (divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// Good failure : 
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.171 s

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
 //Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Process
// Create a function named "divisibleBythree" that will return conditional statements based on the data provided

// pass the objects in the function as an argument to determine if the numbers are divisible by three or not

// return the expected statement

const divisibleByThree = (object) => {
    const num = object.number
    if (num % 3 === 0) {
        return `${num} is divisible by three`
    } else {
        return `${num} is not divisible by three`
    }
}
// Test Passed :
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// First I will create a "describe" statement that will contain the function "Capitalize"

// Then I will create an "it" statement describing that this particular function will produce the desired outcome.

// Finally I will create two expect statements that will call the function and produce the nouns capitalized



describe ("capitalize", () => {
    it ("returns the words inside of the array capitalized", () => {
        expect (capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// Good failure:
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.178 s, estimated 1 s

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Process

// create a function named "capitalize"

// create another function named "capitalwords" that will 1)use the slice and upper case operators to capitalize the first letter of each word and 2)use another slice operator to return the rest of the characters in lower case.

const capitalize = (nouns) => {
    const capitalWords = nouns.map((word)=>{
        return word.slice(0,1).toUpperCase()+word.slice(1)

    }) 
        return capitalWords
}

// Test passed :
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// First I will create a "describe" statement that will contain the function "vowelLocator"

// Then I will create an "it" statement describing how this particular function will return the index of the location of the first vowel

// Finally I will create three expect statements that will call the function and locate the desried index.


describe ("vowelLocator", () => {
    it ("returns the index of the location of the first vowel", () => {
        expect (vowelLocator(vowelTester1)).toEqual(1)
        expect (vowelLocator(vowelTester2)).toEqual(0)
        expect (vowelLocator(vowelTester3)).toEqual(2)
    })
})
// Good failure
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.187 s, estimated 1 s
// Ran all test suites.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Process
// create a function named "vowelLocator"

// create another function named "isVowel" to that will identify vowels

// Use the split operator to turn the string into an array and the find index operator to locate the index where the vowel is located

const vowelLocator = (word) => {
   return word.split("").findIndex(isVowel)
    
}
const isVowel = (character) => {
    const vowels = "aeiouAEIOU"
    return vowels.includes(character)
} 

// Test passed :

//Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.169 s, estimated 1 s