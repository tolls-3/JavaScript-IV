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
        favLanguage: 'Python',
        specialty: 'Back-end',
        catchPhrase: `Don't forget the homies`
      });

    const Gabe = new Instructor({
        name:'Gabe',
        location:'San Francisco',
        age:'42',
        favLanguage:'JavaScript',
        specialty:'Full-Stack Dev',
        catchPhrase:'Give me my daily Serotonin!'
    });

    const Rufus = new Instructor({
        name:'Rufus',
        location:'Lagos',
        age:'45',
        favLanguage:'PHP',
        specialty:'Back-end',
        catchPhrase:'Connect to source'
    });


    // Students Objects

    const Tolu = new Student({
        name:'Tolu',
        location:'Lagos',
        age:26,
        previousBackground:'Building Management Systems',
        className:'WEBEU3',
        favSubjects:'JavaScript'
    });

    const Jane = new Student({
        name:'Jane',
        location:'Abuja',
        age:22,
        previousBackground:'Fitness Instructor',
        className:'WEBEU3',
        favSubjects:'React'
    });

    const Tody = new Student({
        name:'Tody',
        location:'Lagos',
        age:28,
        previousBackground:'Facility Manager',
        className:'WEBEU4',
        favSubjects:'CSS'
    });

    // Project Managers Object
    const Vebra = new ProjectManagers({
        name:'Vebra',
        location:'Ireland',
        age:'28',
        favLanguage:'JavaScript',
        specialty:'Back-end',
        catchPhrase:'Success!',
        gradClassName:'WEBEU2',
        favInstructor:'Gabe'
    });

    const Patty = new ProjectManagers({
        name:'Patty',
        location:'Switzerland',
        age:'28',
        favLanguage:'CSS',
        specialty:'Front-end',
        catchPhrase:'After Hours!',
        gradClassName:'WEBEU2',
        favInstructor:'Gabe'
    });

    

    

      



    