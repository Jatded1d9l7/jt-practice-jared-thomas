// Create a function that takes in an array and returns a new array with all numbers multiplied by 5.

// var myArr1 = [1, 5, 7, 3, 10]

// const mult5 = (array) => {
//     let newArr = []
//     for(let i=0; i<array.length; i++){
//         newArr.push(array[i] * 5)
//     }
//     return newArr
// }

// console.log(mult5(myArr1))

// Create a function that takes in an array and returns a new array with only the even numbers.


var myArr2 = [1, 2, 7, 4, 10, 8, 9]

const onlyEven = (array) =>{
    let newArr = []
    for (i=0; i<array.length; i++){
        if (array[i] % 2 === 0){
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(onlyEven(myArr2))