// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: "B" "r" "a" "v" "o" "2" "0" "2" "3"
// b) Verify and explain: The split method had quotation marks without any spaces as the argument which means it will return each individual character in quotation marks.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The function is missing the return commmand so it does not know what to return.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//  console.log(multipliedByTwo)

// a) Your answer:[ 8, 10,12, 14, 16]
// b) Verify and explain: In this scenario the higher order function "map" took in the numbers inside of the array and multiplied them by 2 and return a new array with the same length.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15]
// b) Verify and explain: The higher order function filter was used to return a new array of specific numbers. The modulo was used to only retun the odd numbers in this array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//  console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: This piece of code called on the "myCodingSkills" object and requested to return the value in the zero index of the "languages" key. Javascript was at that particular index.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: I am not quite sure because I have not made sense of classes at this time and the explanations I have received still do not help me understand this concept.
// b) Verify and explain: I am having trouble grasping this particular concept and getting the information to stick. Perhapos I am overthinking it. I reference the notes and the first few things makes sense but when I look at the other examples I am completely lost.

// I ran the code and it returned the following:
// student:George, cohort: Bravo, year: 2023
// My guess is when the new class "learnStudent" was created it used the parameter "George" to go through the information in the "Learn" class.