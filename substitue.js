// //tempalte literals ``

// // let a = "dfgafhgfygre frbhreag fbhg";


// // let a = "2+2";

// // let userName = "john";

// // let b = `Hello ${userName}`;

// // console.log(a,b);

// //obj
// const user = {
//   name : "John Doe",
//   email: "john@gmail.com",
//   pass: "1234",
 
// }
// console.log(user)

// const user1 = {
//   name : "John Doe",
//   email: "john@gmail.com",
//   pass: "1234",
 
// }

// console.log(user1)
// // let key = "name"
// // let name = user.key;
// // console.log(user.key);
// // const name = user["user name"]
// // console.log(name);

// let {name, email, pass} = user;
// let {name: userName, email: userEmail, pass} = user1;
// // console.log(password);
// console.log(name); 


// //optional chaining




const user = {
  name : "John Doe",
  email: "john@gmail.com",
  pass: "1234",
 
}

const user1 = {
  name : "John Doe",
  email: "john@gmail.com",
  pass: "1234",
 
}
// console.log(user.address?.city ?? "Address not found");

//spread [...]

let u = {
  a: "",
  ...user1
};

let nums = [12, 3, 4, 5]; 

console.log(u);
//rest



