const car = {
    brand:"Toyato",
    miles:2000,
    isDiesel:true
};

console.log(car.brand);

//insery a new propery called owner: "sindhura"
//insert another property called color : "black"

/* car.1stowner = "sindhura"; */
//car.color = "black"


//bracket notation
 car["1stowner"] = "sindhura"
car["color"] = "black"

console.log(car); 


//mutable vs immutability
//what does mutability mean?? //their content can be changed after they are created
//which data types are mutable?? //objects
//what is the differnce between mutation and re-assigment?
//garbage collector

//how to declare objects //object literals //object constructor
//how to access/add properties within nested objects
//wht are the two ways? dot notation , bracket notation
//dot notation is popularly used, there are a couple of scenarios when we should use bracket notation
//wat are those scenarios??
//values are dynamic
//when identifier is not valid

//how to loop an object
//which loop do we use??
//we use for in loop?















//so basically you can access using two methods
//dot notation or bracket notation






//Quick summary:
//Dot notation: car.owner
//Easy and clean, but only works if the property name is a valid JavaScript identifier (no spaces or special chars).

//Bracket notation: car["color"]
//Useful when property names have spaces, special characters, or are dynamic (stored in a variable).


//map methods applies a call back function to every element in the array
//and it returns a new array with the result
//it doesns't change the exisiting array

