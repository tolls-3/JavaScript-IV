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
 
  class Car2{
      constructor(modelName, make){
        this.modelName = modelName;
        this.make= make;
        this.odometer=0;
        this.abilityToDrive=true;
      };
      drive(distance){
        this.odometer+=distance;
      };
      crash(){
        this.abilityToDrive=false;
        return `I crashed at ${this.odometer} miles`; 
      };
      repair(){
        this.abilityToDrive=true;
      };
  };

  let testCar = new Car2 ('Corolla','Toyota');

  /*TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

  function Baby (name, age, favToy) {
    Person.call(this, name, age);
    this.favToy = favToy;
  }
  Baby.prototype=Object.create(Person.prototype);
  Baby.prototype.playWithToy = function () {
    return `I love playing with my ${this.favToy}!`;
  };


  let Tody = new Baby('Tody',2,'Scrabble');
  */

  //Refactored code using ES6 Classes for Task 3
  class Baby2 extends Person2{
      constructor(name,age,favToy){
        super(name,age);
        this.favToy = favToy;
      }
      playWithToy(){
        return `I love playing with my ${this.favToy}!`;
      }
  }
  let Tody = new Baby2('Tody',2,'Scrabble');


  /*TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

function Truck(feat) {
    this.type = feat.type;
    this.name = feat.name;
    this.size = feat.size;
    this.location=feat.location;
  }
  
  Truck.prototype.transport = function() {
    console.log(`The ${this.name} truck is going to ${this.location}`);
  };
  
  Truck.prototype.calculateSize = function() {
    console.log(`${this.name} can contain ${this.size * 100} tonnes.`);
  };
  
  function Ford(fordfeat) {
    Truck.call(this, fordfeat);
    this.isItATruck = fordfeat.isItATruck;
  }
  Ford.prototype = Object.create(Truck.prototype);
  
  Ford.prototype.isItATruck = function() {
    if(this.isItATruck) {
      return true;
    } else {
      return false;
    }
  };
  
  function CAT(catfeat) {
    Truck.call(this, catfeat);
    this.isItStick = catfeat.isItStick;
  }
  
  CAT.prototype = Object.create(Truck.prototype);
  CAT.prototype.isItStick = function() {
    if(this.isItStick) {
      return true;
    } else {
      return false;
    }
  };
  
  const newFord = new Ford({
    isItATruck: true,
    type: 'Truck',
    name: 'Ford',
    size: 10,
    location:'Lagos'
  });
  
  const newCAT = new CAT({
    isItStick: true,
    type: 'Truck',
    name: 'CAT',
    size: 20,
    location:'Abuja'
  });
  */

  class Truck2{
      constructor(feat){
        this.type = feat.type;
        this.name = feat.name;
        this.size = feat.size;
        this.location=feat.location;
      }
      transport() {
        return (`The ${this.name} truck is going to ${this.location}.`);
      }
      calculateSize() {
        return (`${this.name} can contain ${this.size * 100} tonnes.`);
      };
  };

  class Ford2 extends Truck2{
      constructor(feat){
          super(feat);
          this.isItATruck = feat.isItATruck;
      };
  
    isItATruck() {
        if(this.isItATruck) {
        return true;
        } 
        else {
        return false;
        }
    };
};

  class CAT2 extends Truck2{
        constructor(feat){
            super(feat);
            this.isItStick =feat.isItStick;
        };
    
    isItStick() {
        if(this.isItStick) {
        return true;
        } else {
        return false;
        };
    };
};

let newFord2 = new Ford2({
    isItATruck: true,
    type: 'Truck',
    name: 'Ford',
    size: 10,
    location:'Lagos'
  });
  
let newCAT2 = new CAT2({
    isItStick: true,
    type: 'Truck',
    name: 'CAT',
    size: 20,
    location:'Abuja'
  });


  
