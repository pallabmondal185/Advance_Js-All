class Vehicle {
 
    constructor (name, type) {

      //This keyword is used inside of a class and refers to the current instance.
      //In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). 
      this.name = name;
      this.type = type;
    }
   
    getName () {
      return this.name;
    }
   
    getType () {
      return this.type;
    }
   
  }
  class Car extends Vehicle {
   
    constructor (name) {
      super(name, 'bus');
    }
   
    getName () {
      return 'It is a car: ' + super.getName();
    }
   
  }
  let car = new Car('Volvo');
  console.log(car.getName()); // It is a car: Tesla
  console.log(car.getType()); // car
