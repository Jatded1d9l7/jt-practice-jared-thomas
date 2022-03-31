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

// var groceryList = ["chips", "dip", "cookies"]

 
// console.log(groceryList.push("soda"))
// console.log(groceryList)
//
// // Write the code that will add "granola" to the end of array without altering the original array.


// var addGranola = ["granola"]
// console.log(groceryList.concat(addGranola))
// console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
//
// var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList.slice(0, 2))
// console.log(groceryList.slice(0, 2))
//
// // Write the code that will add "beans" to the "chips" and "dip" array.

// console.log(groceryList.push("beans", "corn"))
// console.log(groceryList)

// var groceryList2 = groceryList.slice(0, 2)
// console.log(groceryList2.push("beans"))
// console.log(groceryList2)


// Write the code that will add the number 0 to the beginning of the array.

// var numbers = [2, 4, 6, 8, 10]
// console.log(numbers.unshift(0))
// console.log(numbers)

// Write the code that will add the number 12 to the end of the array.


// console.log(numbers.push(12))
// console.log(numbers)

// console.log(numbers.push(12))
// console.log(numbers)

// Write the code that will remove the first number from the array.

// console.log(numbers.shift())
// console.log(numbers)

// console.log(numbers.shift())
// console.log(numbers)


// var numbers = [4, 4, 6, 8, 10]

// // // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// /// This is a really mentally tricky one. Very interesting.

// var numbersX = numbers.slice(0, 5)
// console.log(numbersX.unshift(0))
// console.log(numbersX)


//                                      Consider the variable:

// var numSet = [2, 13, 6, 8, 4, 2]

// 9. Write the code that finds the index of the first appearance of the number 2.

// console.log(numSet.indexOf(2))

// 10. Write the code that finds the index of the last appearance of the number 2.

// console.log(numSet.lastIndexOf(2))

// 11. Write the code that returns the number at the third index.

// console.log(numSet[3])

//                                       Consider the variable:
// var characters = ["j", "a", "r", "e", "d"]

// 12. Write the code that brings all the letters in the characters array together into a string.

// console.log(characters.join(""))

// 13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// This is significant because slice is essentially copying and pasting into a new variable.

// var charsReversed = characters.slice(0, 5)
// console.log(charsReversed.reverse())
// console.log(characters)

// 14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

// console.log(charsReversed.join("*"))

// 15. Write the code that brings all the letters in the charsReversed array together into a string without separators.

// console.log(charsReversed.join(""))


// 16. Write the code that sorts the names in alphabetical order.
// console.log(characters.sort())

// 17. Write the code that sorts the names in reverse alphabetical order.

// var sortedArrayRev = charsReversed


// can recall the syntax of an array

// Mutator vs Accessor

//Mutators modify the origonal array. 
//Accessors return a new value or representation 
