//es5
// function Vehicle (name, type) {
//     this.name = name;
//     this.type = type;
//   };
   
//   Vehicle.prototype.getName = function getName () {
//     return this.name;
//   };
   
//   Vehicle.prototype.getType = function getType () {
//     return this.type;
//   };
//   function Car (name) {
//     Vehicle.call(this, name, car);
//   }
//   Car.prototype = Object.create(Vehicle.prototype);
//   Car.prototype.constructor = Car;
//   Car.parent = Vehicle.prototype;
//   Car.prototype.getName = function () {
//     return 'It is a car: '+ this.name;
//   };
//   var car = new Car('Tesla');
//   console.log(car.getName()); // It is a car: Tesla
//   console.log(car.getType()); // car

//es6
// class Vehicle {
 
//     constructor (name, type) {
//       this.name = name;
//       this.type = type;
//     }
   
//     getName () {
//       return this.name;
//     }
   
//     getType () {
//       return this.type;
//     }
   
//   }
//   class Car extends Vehicle {
   
//     constructor (name) {
//       super(name, 'bus');
//     }
   
//     getName () {
//       return 'It is a car: ' + super.getName();
//     }
   
//   }
//   let car = new Car('Volvo');
//   console.log(car.getName()); // It is a car: Tesla
//   console.log(car.getType()); // car



  // stacti 
//Classes gives us an opportunity to create static members. 
//We don’t have to use the new keyword later to instantiate a class.
  // class Vehicle {
 
  //   constructor (name, type) {
  //     this.name = name;
  //     this.type = type;
  //   }
   
  //   getName () {
  //     return this.name;
  //   }
   
  //   getType () {
  //     return this.type;
  //   }
   
  //   static create (name, type) {
  //     return new Vehicle(name, type);
  //   }
   
  // }
  // let car = Vehicle.create('Tesla', 'car');
  // console.log(car.getName()); // Tesla
  // console.log(car.getType()); // car


  // class Animal{
  //   eat(){
  //     console.log('eatting ')
  //   }
  //   t(){
  //     console.log("hello")
  //   }
    
  // }
  // class Dog extends Animal{
  //      ab(){
  //        console.log("hello dog")
  //      }
  // }

  // class Babydog extends Dog{
  //   abcd(){
  //     console.log("hello baby daog")
  //   }
  // }

  // let a= new Babydog()
  // a.eat()
  // a.ab()
  // a.abcd()

  //es5

  let add= function(x,y){
    return x+y;
  }
  console.log(add(20,80));

  // es6

  let ab=(a,b) => a+b 
    console.log(ab(10,30));


    let hello=(...x)=>{
      console.log(x);
    }
    hello(1,2,3,4,5,6,7,8,9)
  