//activity
//bonus activity

const studentProfile = {
  name: "Fatima Zahra",
  rollNumber: 23,
  contact: {
    email: "fatima@example.com", //studentProfile.contact.email 
    phone: {
      personal: "9876543210", ////studentProfile.contact.phone.guardian
      guardian: "9123456789"
    }
  },
  academics: {
    subjects: ["Math", "English", "Science"],  //studentProfile.academics.subjects[1]
    marks: {
      Math: 88,
      English: 92,
      Science: 79 //studentProfile.academics.marks.English
    }
  },
  isActive:  true    //studentProfile.isActive = false
};


studentProfile.address = {
  
  city: "Hyderabad",
  pin: 500001
}

/* use dot notation

✏️ Tasks:

Print the student’s email.  //console.log(studentProfile.contact.email)
Print the guardian’s phone number.
Print the marks in English.
Print the second subject from the subjects array.
Update the student’s activity status to false.
Add a new nested property address inside studentProfile, with this structure:
address: {
  city: "Hyderabad",
  pin: 500001
}

*/




//can we access nested keys usng bracket notation instead of dot notation?
//bonus activity
//use a bracket notation to access student's email and students guardian number









/* console.log(studentProfile["contact"]["email"]);
console.log(studentProfile["contact"]["phone"]["guardian"]); */














/* //email
console.log(studentProfile.contact.email);
//guardian's number
console.log(studentProfile.contact.phone.guardian);
//english marks
console.log(studentProfile.academics.marks.English);
//second subject
console.log(studentProfile.academics.subjects[1]);
//activity : false
console.log(studentProfile.isActive = false);
//nw address
//studentProfile.address = "Hyderbad"; => ths is fne
//but this throws error because without assigning anythig to address, we can't move to city
//studentProfile.address.city = "Hyderbad"

studentProfile.address = {
    city: "Hyderabad",
    pin: 500001
}

console.log(studentProfile); */


