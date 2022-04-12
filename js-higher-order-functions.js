// var myArray = [5, 3, 2, 9, 8];

// let newArray = [];
// for(let i=0; i<arr.length; i++){
//   let valueTimesThree = myArray[i] * 3
//   console.log(valueTimesThree)
//   newArray.push(valueTimesThree)
// }

// console.log(newArray);

// var myArray = [5, 3, 2, 9, 8]

// const multiplier = myArray.map(value => {
//     return value * 3
// })

// console.log(multiplier)

// var myArray = [5, 3, 2, 9, 8]

// const multiplier = myArray.map(value => value * 3)

// console.log(multiplier)

// var myArray = [5, 3, 2, 9, 8]

// const multiplier = (array) => {
//   return array.map(value => value * 3)
// }
// console.log(multiplier(myArray))


// var fruitArray = ["banana", "mango", "apple", "grape"]

// const capitalizer = (array) => {
//   let eachItem = array.map(value => {
//     return value[0].toUpperCase() + value.substring(1)
//   })
//   return eachItem.join(" ")
// }
// console.log(capitalizer(fruitArray))

var numbersArray1 = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyEven(numbersArray1))