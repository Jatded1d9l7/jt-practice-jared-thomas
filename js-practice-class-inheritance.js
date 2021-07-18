// classes define attributes (data) and behaviors (methods).
// classes are not real things, they are definitions of things.
// class Engine {
//     constructor () {
//         this.oillevel = 100
//         this.rpm = 0
//     }
// }
// let engine = new Engine()
// console.log(engine)

// console.log("oil:", engine.oillevel)
// console.log("rpm:", engine.rpm)
// console.log(engine)
//________________

// class Engine {
//     constructor () {   

//     this.oilLevel = 100
//     this.rpm = 0
// }
// start () {
//     this.rpm = 500
// }
// stop () {
//     this.rpm = 0
// }
// }

// let engine = new Engine()

// // console.log("rpm:", engine.rpm) 
// engine.start()
// console.log("rpm:", engine.rpm)

// engine.stop()
// console.log("rpm", engine.rpm)
//_______________

class Engine {
    constructor () {
        this.oilLevel = 100
        this.rpm = 0
    }
    start() {
        this.rpm = 500
    }
    stop () {
        this.rpm = 0
    }
}

// class TurboEngine extends Engine {
//     constructor() {
//         super()
//     }
// }
// var turbo = new TurboEngine()
// console.log(turbo)
//_________

// class TurboEngine extends Engine {
//     constructor () {
//         super ()
//         this.horsepower = 450
//     }
//     accelerate () {
//         this.rpm = 750
//     }
//     decelerate () {
//         this.rpm = 0
//     }
// }
// var turbo = new TurboEngine ()
// // console.log (turbo)

// turbo.accelerate()
// console.log("rpm:", turbo.rpm)
//__________
// class StockEngine extends Engine {
//     constructor () {
//         super ()
//         this.horsepower = 250
//     }
//     accelerate() {
//         this.rpm = 250
//     }
//     decelerate() {
//         this.rpm = 0
//     }
// }
// var stock = new StockEngine()
// // console.log(stock)

// stock.accelerate()
// console.log("rpm:", stock.rpm)

// stock.decelerate()
// console.log("rpm:", stock.rpm)

//_____Challenges_____

//Pseudo Code
// create a class called Car
// make a constructor
// make a var called myCar as an instance of the class Car
// the model for Car class is "generic car"
// year on initialization 


//--- I need to revisit the following: 
// class Car {
//     constructor(){
//         this.model = "generic car"
//         this.year  = "my car year"
//         this.wheels  = 4
//     } 
//     wheels(){
//         this.wheels = 4
//     }
// }

// var myCar = new Car ()
// console.log(myCar)

// class Tesla {
//     constructor(){
//         this.model = "tesla model"
//         this.
//     }
// }