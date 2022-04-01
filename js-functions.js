// 1. What is the purpose of a function? 

// A function is a set of instructions telling the computer how to do a task. 

// 2. Define the anatomy of an arrow function

// const does not get reassigned
// const greeting = () => {
//     return "Hello there LEARN student!"
//   }

//   console.log(greeting())


//   const jtGreet = (name) => {
//       return `${name} is the Best!!`
//   }

//   console.log(jtGreet('Jared')) 
//   console.log(jtGreet('Steven')) 
//   console.log(jtGreet('Marty')) 

// const multiplier = (num1, num2) => {
//     return num1 * num2
//   }
  
//   console.log(multiplier(3, 5))
//   // output --> 15
//   console.log(multiplier(5, 8))
//   // output --> 40

// const multiplier = (num1, num2) => {
//     return num1 * num2
//   }

// var myNumber1 = 3
// var myNumber2 = 5
// var myNumber3 = 8

// console.log(multiplier(myNumber1, myNumber2))
// // output --> 15
// console.log(multiplier(myNumber2, myNumber3))
// // output --> 40

// // create a function called tallEnough that takes in a number called height
// const tallEnough = (height) => {
//     // if height is less than 40 return "Cannot ride the rollercoaster"
//     if(height < 40) {
//       return "Cannot ride the rollercoaster"
//     }
//     // if height is greater than or equal to 40 return "Buckle up, let's ride"
//     else if(height >= 40) {
//       return "Buckle up, let's ride"
//     }
//     // any other input return error
//     else {
//       return "error"
//     }
//   }
  
//   console.log(tallEnough(74))


//                  Challenges                  //



// 1. Write a function named marco that returns polo 
// const marco = () => {
//     return "polo"
// }

// console.log(marco())

// 2. write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>"

// const greeting = (name) => {
//     return `Hello ${name} how are you doing today?`
// }
// console.log(greeting("Jared"))
// console.log(greeting("Steven"))
// console.log(greeting("Marty"))

// 3. Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (number) => {
//     if (number % 2 > 0){
//         return `${number} is odd`
//     }
//     else if (number % 2 <= 0) {
//         return `${number} is even`
//     }
// }

// console.log(oddOrEven(89))

// 4. Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (number) => {
//     return (number * 3)
// }

// console.log(triple(2))
// console.log(triple(3))
// console.log(triple(4))

// 5. Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// const multiply = (num1, num2) => {
//     return (num1 * num2)
// }

// console.log(multiply(3, 5))
// console.log(multiply(4, 6))
// console.log(multiply(5, 7))

// 6. Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = (num1, num2) => {
//     if (num1 % num2 > 0) {
//         return `${num1} and ${num2} are not evenly divisble`
//     }
//     else if (num1 % num2 <= 0){
//         return `${num1} and ${num2} are evenly divisible`
//     }
// }

// console.log(divisibleBy(2, 3))
// console.log(divisibleBy(3, 3))
// console.log(divisibleBy(4, 3))

// 7. Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (number) =>{
//     if (number >= 90){
//         return `A score of ${number} earns you an "A"`
//     }
//     else if (number >= 80){
//         return `A score of ${number} earns you an "B"`
//     }
//     else if (number >= 70){
//         return `A score of ${number} earns you an "C"`
//     }
//     else if (number >= 60){
//         return `A score of ${number} earns you an "D"`
//     }
//     else {
//         return "You are either really smart or really stupid"
//     }
// }

// console.log(assignGrade(90))
// console.log(assignGrade(80))
// console.log(assignGrade(70))
// console.log(assignGrade(60))
// console.log(assignGrade(50))

// 8. Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

