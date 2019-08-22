// CODE here for your Lambda Classes

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


class Person{
    constructor(param){
        this.name=param.name;
        this.age=param.age;
        this.location=param.location;
    };
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)    
      };	
}

class Instructor extends Person{
    constructor(param){
        super(param);
        this.specialty=param.specialty;
        this.favLanguage=param.favLanguage;
        this.catchPhrase=param.catchPhrase;
    };
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} recieves a perfect score in ${subject}`);
    }
};

class Student extends Person{
    constructor(param){
        super(param);
        this.previousBackground=param.previousBackground;
        this.className=param.className;
        this.favSubjects=param.favSubjects;
    };
    listSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(`${subject}`);
    });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
};

    class ProjectManagers extends Instructor{
        constructor(param){
            super(param);
            this.gradClassName=param.gradClassName;
            this.favInstructor=param.favInstructor;
        };
        standUp(slackChannel){
            console.log(`${this.name} announces to ${slackChannel}, @channel standby times!`);
        };
        debugsCode(student,subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }
    };

    const fred = new Instructor({
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
      });




    