// ES 2 module(named or default), common.js
// Class Object

// export class User {
//   // class body
//     // properties(attributes) => data
//   name;
//   email;
//   address;
//   phone;
//   image;
//   role = "";


//     // methods/functions
// }

// export let variable = "Hello"
// export const functionDef = () => {
// }

// export default User;

// module.exports = User;
// module.exports = {
//   User,
//   variable,
//   functionDef
// }



// class User {
//   // class body
//   #name;
//   email;
//   address;
//   phone;
//   image;
//   role = "";

//   // getName() {
//   //   return this.name
//   // }
// }


// const userObj = new User();
// userObj.name = "Keshang"
// console.log(userObj.name);

// console.log("My name is ", userObj.getName());

// class Students  {
//   name;
//   email;
//   rollNo;
//   className;
//   section

//   constructor(name, email, rollNo, className, section) {
//     this.name = name;
//     this.email = email;
//     this.rollNo = rollNo;
//     this.className = className;
//     this.section = section;
//   }
// }


// const stdObj = new Students("student Name", "email@student", 1, "PG", "A");
// console.log(stdObj);
// const stdObj1 = new Students("one student", "oenstudent@student", 2, "UG", "B");
// console.log(stdObj1);


// class User  {
//   name;
//   surName;
//   role = "teacher";
//   college;
//   constructor(name, surName, college, role = "student") {
//     this.name = name;
//     this.surName = surName;
//     this.college = college
//     this.role =  role;
//   }
// }

// const userObj = new User("Keshang", "Gurung", "Herald College");
// console.log(userObj);


// const n = userObj.#name = "Keshang";
// console.log(n);

// class Database {
//   connection;
//   constructor() {
//     //db connect
//   }
// }

// const db = new Databsase();


class Student {
  name;
  email;
  rollNo;
  className;
  section;

  constructor(name, email, rollNo, className, section) {
    this.name = name;
    this.email = email;
    this.rollNo = rollNo;
    this.className = className;
    this.section = section;
  }
}

const std = new Student("Stduent One", "email@student", 1, "PG", "A");
console.log(std);















