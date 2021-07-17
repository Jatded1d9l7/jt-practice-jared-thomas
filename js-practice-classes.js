// A class is a function that contain data and behavior
// Classes are blueprints for objects
// Objects are instances of classes

class Squirrel { //this is a function
  constructor () {  //method for creating and initializing objects
    this.nutCount = 0
  }
  storeNut() {
    this.nutCount += 1
  }
  eatNut () {
    this.nutCount -=1
  }
}

var rocky = new Squirrel()  //creating the instance of this class

console.log(rocky.nutCount)

rocky.storeNut()
console.log(rocky.nutCount)

rocky.eatNut()
console.log(rocky.nutCount)

// __________

class Squirrel {
  constructor () {
    this.nutCount = 0
  }
  storeNut() {
    this.nutCount += 1
  }
  eatNut() {
    this.nutcount -=1
  }
}
