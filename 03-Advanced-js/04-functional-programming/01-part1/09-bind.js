//bind method

//it looks exactly like call method but
//bind method binds a method with an object and returns to us the copy of that method
//the method can be invoked later

//the only difference between call, apply and bind is that bind gives you a copy
//of that method which can be invoked later

let name = {
    firstName : 'Narendra',
    lastName : 'Modi',
}

function greet (age, city) {
        console.log(`hello ${this.firstName} ${this.lastName} of ${age} from ${city}`)
    }


let greetMe = greet.bind(name,75,'Ahmedabad')
console.log(greetMe);

greetMe()



//use the same example in the previous file but use bind instead of call or apply


