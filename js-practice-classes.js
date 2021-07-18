// A class is a function that contain data and behavior
// Classes are blueprints for objects
// Objects are instances of classes
//
// class Squirrel { //this is a function
//   constructor () {  //method for creating and initializing objects
//     this.nutCount = 0
//   }
//   storeNut() {
//     this.nutCount += 1
//   }
//   eatNut () {
//     this.nutCount -=1
//   }
// }
//
// var rocky = new Squirrel()  //creating the instance of this class
//
// console.log(rocky.nutCount)
//
// rocky.storeNut()
// console.log(rocky.nutCount)
//
// rocky.eatNut()
// console.log(rocky.nutCount)

// __________

// class Squirrel {
//   constructor () {
//     this.nutCount = 0
//   }
//   storeNut() {
//     this.nutCount += 1
//   }
//   eatNut() {
//     this.nutcount -=1
//   }
// }
// var rocky = new Squirrel() // these are class instances
// var alvin = new Squirrel()
//
// alvin.storeNut()
// alvin.storeNut()
//
// console.log("Rocky has", rocky.nutCount)
// console.log("Alvin has", alvin.nutCount)

//_____________
// class Squirrel {
//   constructor() {
//     this.nutCount = 0
//   }
//   storeNut() {
//     this.nutCount += 1
//   }
//   eatNut() {
//     this.nutCount -= 1
//   }
// }
// // create a new array
// var squirrels = []
// squirrels.push(new Squirrel())
// squirrels.push(new Squirrel())
//
// squirrels[0].storeNut()
// squirrels[0].storeNut()
//
// squirrels.map((value, index) => {
// //   console.log (`The squirrel at index ${index} has ${value.nutCount} nuts`)
// // })
// //_________________
// // classes can store any kind of data
//
// class DiceRoller {
//   constructor() {
//     this.rolls = []
//   }
//   roll() {
//     this.rolls.push(Math.ceil(Math.random() * 6))
//   }
//   lastRole() {
//     return this.rolls[this.rolls.length - 1]
//   }
// }
//
// var roller = new DiceRoller()
// console.log("role:", roller.lastRole())
//
// roller.roll()
// console.log("Roll:", roller.lastRole())
//
// roller.roll()
// console.log("Role:", roller.lastRole())
//
// console.log("All Rolls:", roller.rolls)
//__________________
//
// class Dog{
//   constructor(name, age){
//     this.name = name
//     this.age  = age
//   }
//   description(){
//     return `${this.name} is a ${this.age} year old dog`
//   }
// }
//
// // any of these variables can be reassigned
// var rover = new Dog('Rover', 4)
// console.log(rover.description())
// var kai = new Dog('Kai', 2)
// console.log(kai.description())
// var plato = new Dog("Plato", 8)
// console.log(plato.description()
// var bella = new Dog("Bella", 11)
// console.log(bella.description())


// Challenges "CLASSES" __________
//
// class Coffee { //class is a function: Data & Behavior
  // constructor(type, cream, sugar) {
  //   this.type  = type.toLowerCase ()
  //   this.cream = cream
  //   this.sugar = sugar
  // }
// coffeeProfile(){
//   return `${this.type}: ${this.creams()},
//   ${this.sugars()}`
// }
// creams() {
//   if(this.cream > 1) {
//     return `${this.cream} creams`
//   } else {
//     return `${this.cream} cream`
//   }
// }
// sugars () {
//   if (this.sugar > 1){
//     return `${this.sugar} sugars`
//   } else {
//     return `${this.sugar} sugar`
//   }
// }
// }
// // 1. write the code that makes black coffee
// var blackCoffee = new Coffee ("black coffee", 0, 0)
// console.log(blackCoffee)
// // 2. write the code that makes a coffee with two sugars
// // 3. write the code that makes a coffee with 2 sugars then write the code that outputs the coffee's profile
// var coffee2sug = new Coffee ("Coffee with sugar", 0, 2)
// console.log(coffee2sug)
//________________Question 2
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// class Latte {
//   constructor (flavor, milkType, numShot){
//   this.flavor   = flavor.toLowerCase()
//   this.milkType = milkType
//   this.numShot  = numShot
// } latteProfile () {
//   return `${this.flavor}: ${this.milkType}, ${this.numshot}`
//   }
// }
// var regLatte = new Latte ("Regular Latte", 0, 1)
// console.log(regLatte)
//
// var hazLatte = new Latte ("Hazelnut Latte", 1, 2)
// console.log(hazLatte)

//____________Question 3
//volume of a cylinder

// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class CylinderVolumn {
  constructor (radius, height) {
    this.radius = radius
    this.height = height
  }
  volumnCalculation() {
    return (Math.PI * this.radius * (2* this.height)).toFixed(4)
  }
}

var cylinder1 = new CylinderVolumn ("1","1")
console.log(cylinder1.volumnCalculation())
var cylinder2 = new CylinderVolumn ("4","5")
console.log(cylinder2.volumnCalculation())
var cylinder3 = new CylinderVolumn ("88","100")
console.log(cylinder3.volumnCalculation())
