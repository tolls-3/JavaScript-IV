// CODE here for your Lambda Classes

//Class for Person constructor
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

//Class for Instructor constructor which is an extension of Person
class Instructor extends Person{
    constructor(param){
        super(param);
        this.specialty=param.specialty;
        this.favLanguage=param.favLanguage;
        this.catchPhrase=param.catchPhrase;
    };
//Methods for Instructor constructor   
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} recieves a perfect score in ${subject}`);
    }
};

//Class for Student constructor which is an extension of Person
class Student extends Person{
    constructor(param){
        super(param);
        this.previousBackground=param.previousBackground;
        this.className=param.className;
        this.favSubjects=param.favSubjects;
    };
//Methods for Student constructor    
    listSubjects(){
        this.favSubjects.forEach(function(subject) {
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

//Class for Project Managers constructor which is an extension of Instructor
    class ProjectManagers extends Instructor{
        constructor(param){
            super(param);
            this.gradClassName=param.gradClassName;
            this.favInstructor=param.favInstructor;
        };

//Methods for Project Manager constructor        
        standUp(slackChannel){
            console.log(`${this.name} announces to ${slackChannel}, @channel standby times!`);
        };
        debugsCode(student,subject){
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }
    };


//Instructor Objects   
    const fred = new Instructor({
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
      });

      



    