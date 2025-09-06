//"Writing reusable utility functions" means creating small, single-purpose functions 
// that can be used repeatedly throughout your codebase. 

//Avoids Repetition:
//Easier Maintenance
//Improved Readability

const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'admin' },
  { id: 4, name: 'David', role: 'guest' }
];

//step 1 
//extract array with only admin data
//extract array with only guest data

//const admins = 

//const guests = users.filter(user => user.role === 'guest')


const admins = utils(users,'admin') 
const guests = utils(users,'guest')




//step 2
//writing a utility function















//const admins = users.filter(user => user.role === 'admin')
//const guests = users.filter(user => user.role === 'guest')

/* function utils(arr,key) {
  return arr.filter(user => user.role === key)
}


const admins = utils(users,'guest')
console.log(admins); */


