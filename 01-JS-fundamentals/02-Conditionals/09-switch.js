//use switch when you are comparing one value against multiple options/conditions
//or in other words multiple cases


/* 

switch (expression) {
    case value1:
      // code block
      break;
    case value2:
      // code block
      break;
    ...
    default:
      // default code block
  }

*/



/**
 * Create a program using if else where you take user role 
 * and return user priviliges for that role
 * Roles: admin, Sub Admin, user, teacher
 * Admin - Get Full Access
 * Sub Admin - Gets Access to create/delete courses
 * Teacher - Gets access to create / delete tests
 * user - gets access to only consume content.
 */


let role = 'user'; 

if(role==="admin") {
    console.log('You have full access');
} else if(role === "sub admin" ) {
    console.log('You have access to create/delete');
} else if(role === "Teacher") {
    console.log("You have access to create/delete tests");
} else {
    console.log("You only have to access to consume content");
}

//same in switch
switch(role) {
  case "admin":
    console.log("You have full access");
    break;
  case "sub-admin" :
    console.log("you have access to create/delete courses")
    break;
  default:
    console.log('You have no access')
}


    