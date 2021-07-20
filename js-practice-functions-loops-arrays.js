// //Create a function that takes in an array and returns a new array with all numbers multiplied by 5.
// var myArr1 = [1, 5, 7, 3, 10]
//
// const mult5 = (array) => {
//   let newArr = [] //empty array inside the function
//   for(let i=0; i<array.length; i++){
//     newArr.push(array[i] * 5) //^pushing to the empty array above
//   }
//   return newArr
// }
// console.log(mult5(myArr1))
//
// //Create a function that takes in an array and returns a new array with only the even numbers.
// var myArr2 = [1, 2, 7, 4, 10, 8, 9]
//
// const onlyEven = (array) => {
//   let newArr = [] //empty array inside the function
//   for(let i=0; i<array.length; i++){
//     if(array[i] % 2 === 0){
//       newArr.push(array[i]) //^pushing to the empty array above
//     }
//   }
//   return newArr
// }
// console.log(onlyEven(myArr2))
//
// // Challenges
//
// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.

// Psuedo Code #1
// 1. write a function - newArray
// 2. make a parameter - mult3 'this parameter should be empty to push later'
// 3. create the 'for loop'
// 4. create the conditional
// 5. push to mult3
//
// var testArr1 = [3, 9, 15, 4, 10]
//
// const mult3 = (array) => {
//   let newArray = []
//   for (var i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 3)
//   }
//   return newArray
// }
// console.log(mult3(testArr1))


// Write a function that takes in an array and returns a new array with only odd numbers.

// Psuedo Code #2
// 1. Create a function - onlyOdd
// 2. Make a Parameter - array
// 3. Make a 'for loop'

// __________ This is my second pass at just practicing
// Much of what follows is just a recap from above
// Honestly, Don't have to do this again, just want the practice

// Create a function that takes in an array and returns a new array with all numbers multiplied by 5

// pseudo Code
// input = function mult5
// parameter = array
// output = new array

// var myArr1 = [10, 5, 7, 3, 10]
// var myArr2 = [72, 93, 44, 20, 1]
//
// const mult5 = (array) => {
//   let newArr = [] //empty array that will get pushed
//   for(let i=0; i<array.length; i++){ // the length is 5 but the index is 4 this is why i<array.length
//     newArr.push(array[i] * 5)
//   }
//   return newArr
// }
//
// console.log(mult5(myArr2))
