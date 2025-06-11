//create an object called person with a greet method
//A method is a function that is a property of an object.
//this keyword
//arrow function
//assignment problem


let person = {
    name : 'sindhura',
    gender: 'female',
    sayHello : function () {
        console.log('hello!',this.name);
    }
}

person.sayHello(); //hello sindhura






//assignment

/*
  Create an object that uses 'this' in a method to refer to its own properties.

Instructions:
1. Create an object called personalAssistant with the following properties:
name
language
tasks (array)
2. Add a method introduce that returns a sentence like:
"Hi, I'm [name]. I can speak [language] and help you with [number of tasks] tasks."

3. Call and log the result of introduce.
Example: Hi, I'm Elly. I can speak English and help you with 3 tasks.

*/






/* const person = {
    name : 'sindhu',
    greet : function () {
        console.log(`hello ${person.name}`)
    }
}

person.greet(); */

//

 const personalAssistant = {
    name : 'Ana',
    language: 'English',
    tasks : ['emails','calls','schedule'],

    job : function() {
        console.log(`Hi I am ${this.name}.I can speak ${this.language}.I can hep you with ${this.tasks.length}`)
    }
}

personalAssistant.job(); 

