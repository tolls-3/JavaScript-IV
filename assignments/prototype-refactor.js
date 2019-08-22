/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach=[]
  };
  Person.prototype.greet = function () {
    console.log(`Good-day!, I am ${this.name} and I am ${this.age} years old.`);
  };
  Person.prototype.eatEdibles = function (food) {
      return this.stomach.push(food);    
  }
  Person.prototype.poop=function(){
    this.stomach=[];
  };
  const tolu = new Person ('Tolu',40);
  */

  //Refactored code using ES6 Classes for Task 1

  class Person2{
      constructor(name,age){
        this.name = name;
        this.age = age;
        this.stomach=[]
      };
      greet(){
          return `Good-day!, I am ${this.name} and I am ${this.age} years old.`
      }
      eatEdibles(food){
        return this.stomach.push(food);
      }
      poop(){
          this.stomach=[];
      }
  }
let tolu=new Person2('Tolu',40);


/*TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

  function Car(modelName, make) {
    this.modelName = modelName;
    this.make= make;
    this.odometer=0;
    this.abilityToDrive=true;
  
  Car.prototype.drive = function (distance) {
    this.odometer+=distance;
  }

  Car.prototype.crash = function() {
    this.abilityToDrive=false;
    return `I crashed at ${this.odometer} miles`; 
  }

  Car.prototype.repair=function(){
    this.abilityToDrive=true;
  }
};

  const tolu = new Car ('Corolla','Toyota');
  */

  //Refactored code using ES6 Classes for Task 2

  class


//   class Animal2 {
//     constructor(name) {
//       this.name = name;
//     }
//     greet() {
//       return this.name + '!!!!!'
//     }
//     growl() {
//       return 'grrr'
//     }
//   }
//   class FlyingAnimal2 extends Animal2 {
//     constructor(name, wingspam) {
//       super(name);
//       this.wingspam = wingspam;
//     }
//     fly() {
//       return `${this.name} is flying!!`;
//     }
//   }
  
//   var mouse = new Animal2('Mouse');
//   var bat = new FlyingAnimal2('Bat', 5);