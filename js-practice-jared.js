// This is my personal practice palace!

// Write the code that will log the outcome of 34 added to 71.

// console.log(34 + 71)

//
// Write the code that will log the outcome of 67 subtracted from 123.

// console.log(67 - 123)

// Write the code that will log the outcome of 56 multiplied by 23.

// console.log(56 * 23)

// Write the code that will log the outcome of 45 divided by 5.

// console.log(45 / 5)

// Write the code that will log the outcome of 5 to the power of 7.

// console.log(5 ** 7)


// Write the code that will log the whole number remainder of 33 divided by 6.

// console.log(33 / 6)

// Write the code that will log the length of a string containing your name.

// console.log("jared".length)


// Write the code that will log whether your string includes the letter "e"?

// console.log("jared".indexOf("e"))
// console.log("jared".includes("e"))

// Write the code that will log the character at the first index of the string.

// console.log("jared"[0])

// Write the code that will log the string in all uppercase letters.

// console.log("jared".toUpperCase())

// continued

// Is 34 divided by 3 greater than 67 divided by 2?

// console.log(34 / 3 > 67 / 2)

// Does 5 evaluate to the same as "5"?

// console.log(5 == "5")

// Does 5 strictly equal "5"?

// console.log(5 === "5")

// Does !3 strictly equal 3?

// console.log(!3 === 3)

//
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?


// console.log("LEARN".length === 5 && "student".length === 7)

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

// console.log("LEARN" === 5 || "Student".length === 10)

// Does "LEARN" contain the subset "RN"?

// console.log("LEARN".includes("RN"))

// Does "LEARN" contain the subset "rn"?

// console.log("LEARN".includes("rn"))

// Does "LEARN"[0] strictly equal "l"?

// console.log("LEARN"[0] === "l")

// Modify the code from the previous question to return true

// console.log("LEARN"[0] === "L")

// var theQuestion = "life, the universe, and everything "
// var theAnswer = 42


// Write the code that will log theAnswer divided by 2.

// console.log(theAnswer / 2)


// Write the code that will log the length of theQuestion.

// console.log(theQuestion.length)

// Write the code that will log the index of the character "f" in the theQuestion.

// console.log(theQuestion.indexOf("f"))


// Write the code that will log the concatenation of the two variables.

// console.log(theQuestion + theAnswer)

// Write the code that will log "the universe".

//6

// console.log(theQuestion.slice(6, 18))

// Write the code that will log the character "l" from theQuestion.

// console.log(theQuestion[0])

// Write the code that will log whether theQuestion.length is greater than theAnswer.

// console.log(theQuestion.length > theAnswer)


// const greeting = () => "hello there Jared!"
// console.log(greeting())

// //or 

// const greeting = () => {
//     return "Hello there LEARN student!"
//   }

// const greeting = (name) => {
//     return `Hello there ${name}!`
//   }
//   console.log(greeting("Matt"))
//   // output --> "Hello there Matt!"
//   console.log(greeting("Rachael"))
//   // output --> "Hello there Rachael!"

//   //or

// const greeting = (name) => `Hello there ${name}!`

//   console.log(greeting("Matt"))
//   // output --> "Hello there Matt!"
//   console.log(greeting("Rachael"))
//   // output --> "Hello there Rachael!"


//   const multiplier = (num1, num2) => {
//     return num1 * num2
//   }
  
//   console.log(multiplier(3, 5))
//   // output --> 15
//   console.log(multiplier(5, 8))
//   // output --> 40

//or

//   const multiplier = (num1, num2) => num1 * num2


//   console.log(multiplier(3, 5))
//   // output --> 15
//   console.log(multiplier(5, 8))
//   // output --> 40

// create a function called tallEnough that takes in a number called height

// const tallEnough = (height) => {
//     if(height < 40) {
//       return "Cannot ride the rollercoaster"
//     }
//     else if(height >= 40) {
//       return "Buckle up, let's ride"
//     }
//     else {
//       return "error"
//     }
//   }

// //   console.log(tallEnough(30))


//   const tallEnough = (height) => { if(height < 40) {return "Cannot ride the rollercoaster"}
//       else if(height >= 40) {return "Buckle up, let's ride"}
//       else {return "error"}}

//   console.log(tallEnough(40))

// var myArr1 = [1, 5, 7, 3, 10]

// const mult5 = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     newArr.push(array[i] * 5)
//   }
//   return newArr
// }

// console.log(mult5(myArr1))

// var myArr2 = [1, 2, 7, 4, 10, 8, 9]

// const onlyEven = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     if(array[i] % 2 === 0){
//       newArr.push(array[i])
//     }
//   }
//   return newArr
// }

// console.log(onlyEven(myArr2))

// var myArray = [5, 3, 2, 9, 8]

// const multiplier = myArray.map(value => {
//     return value * 3
// })

// console.log(multiplier)


// create a function that takes in an array and returns each word capitalized
// var fruitArray = ["banana", "mango", "apple", "grape"]

// const capitalizer = (array) => {
//   let eachItem = array.map(value => {
//     return value[0].toUpperCase() + value.substring(1)
//   })
//   return eachItem.join("")
// }
// console.log(capitalizer(fruitArray))


// create a function that returns only the values at the odd indexes
// var numbers = [4, 24, 5, 9, 0, 78]

// const getOnlyOddIndex = (array) => {
//   return array.filter((value, index) => {
//     return index % 2 !== 0
//   })
// }
// console.log(getOnlyOddIndex(numbers))


// var myArr1 = [1, 5, 7, 3, 10]

// const mult5 = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     newArr.push(array[i] * 5)
//   }
//   return newArr
// }

// console.log(mult5(myArr1))

// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]

// const multiply = (array) => {
//     let newArr = []
//     for(let i=0; i<array.length; i++){
//          newArr.push(array[i] * 3)
//     }
//     return newArr
// }

// console.log(multiply(testArr1))

// Write a function that takes in an array and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const onlyOdd = (array) => {
//     let odds = []
//         for(let i = 0; i<array.length; i++){
//             if(array[i] % 2 != 0){
//                 odds.push(array[i])
//             }
//         }
//         return odds
//     }

//     console.log(onlyOdd(testArr2))

// write a function called onlyOdd
// iterate through the array using for loop or .filture 
// i % 2 != 0

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.

// var arr1 = [3, 9, 15, 4, 10]

// create function
// maps each value in array 
// array number * 10 

// const multiply = (array) => {
//     return array.map(value => value * 10)
// }
// console.log(multiply(arr1))


// // create a function that returns only the values at the odd indexes
// var numbers = [4, 24, 5, 9, 0, 78]

// const onlyOdds = (array) => {
//   return array.filter((value, index) => {
//     return index % 2 !== 0
//   })
// }
// console.log(onlyOdds(numbers))

// var person = {
//     name: "Alex Keaton",
//     phone: 123456789,
//     getData: function() {
//       return `${this.name}'s phone number is ${this.phone}`
//     }
//   }
  
//   console.log(person.getData())
//   --> "Alex Keaton's phone number is 123456789"

// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
//   }

//   var { firstName, lastName } = person

//   console.log(person)


// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     getData: function () {
//         return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
//     }
//   }

//   var { firstName, lastName } = person
  
//   console.log(person.getData())