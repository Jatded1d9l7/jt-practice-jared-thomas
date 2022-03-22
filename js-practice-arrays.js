// Anatomy of an Array
// var learnStudents = ["Debra", "Jonas", "Joel"]
//1. variable declaration [var]
//2. variable name  [learnStudents]
//3. single equal sign =
//4. opening and closing square brackets [---]
//5. elements in the array ["Debra", "Jonas", "Joel"]


// Mutators
// .push(value) - adds to the end of an array
// .pop() - removes the last value in an array
// .unshift(value) - adds a value to the begining of an array
// .shift() - removes the zeroth index of the array
// .reverse() - reverses the order of the values in an array
// .sort() - Alphabetizes the values in an array

// Accessors- does not change the array
// .indexOf() - returns the index of the first instance of a given value
// .lastIndexOf(value) - returns the last index of a given value
// .slice(startingIndex, endingIndex) - returns a subset of the array
// .concat() - merges two or more arrays to form one combined array
// .join("") - converts all values in an array to a string
// .split("") - converts a string into an array

// Challenges
// Write the code that will add "soda" to the end of the original array.

var groceryList = ["chips", "dip", "cookies"]
//
// 
// console.log(groceryList.push("soda"))
// console.log(groceryList)
//
// // Write the code that will add "granola" to the end of array without altering the original array.

var = updatedList = groceryList.push('Cookies')
console.log(updatedList)

// var addGranola = ["granola"]
// console.log(groceryList.concat(addGranola))


// Write the code that will return a subset of the array containing only "chips" and "dip".
//
// var groceryList = ["chips", "dip", "cookies"]
// //
// // console.log(groceryList.slice(0, 2))
//
// // Write the code that will add "beans" to the "chips" and "dip" array.
//
// var groceryList2 = groceryList.slice(0, 2)
// console.log(groceryList2.push("beans"))
// console.log(groceryList2)


// Write the code that will add the number 0 to the beginning of the array.

// console.log(numbers.unshift(0))
// console.log(numbers)



// Write the code that will add the number 12 to the end of the array.

// console.log(numbers.push(12))
// console.log(numbers)

// Write the code that will remove the first number from the array.

// console.log(numbers.shift())
// console.log(numbers)

var numbers = [4, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

var numbersX = numbers.slice(0, 5)
console.log(numbersX.unshift(0))
console.log(numbersX)
