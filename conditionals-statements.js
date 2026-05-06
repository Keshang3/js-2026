// operators
// control Statements
// loops

// operators
//Mathematical / Arithmetic
// +, -, *, /, %
// Increment/ Decrement
// ++, --

let a = 10;
let b = 10;

let c = a + b;
let d = a / b; //1
let e = a % b; //0

a++;
//a = 11
++a;
//a = 12

console.log(a++); //output: 12, print first then add and assign
console.log(++a); //output: 14, first adssign or add and then print

// Assignment operator

a = a + 1;
console.log(a);
a++;
console.log(a);
++a;
console.log(a);
a += 1;
console.log(a);

// Comparision operator(boolean)
// <, >, <=, >=, ==, ===, !=, !==
// a = 22, b = 10;
console.log(a <= b); //false

let x = 10;
let y = "10";

// It only compares values
console.log(x == y); //true
console.log(x != y); // false

// It comapres the value as well as datatype
console.log(x === y); //false
console.log(x !== y); //true

// false, 0, null, undefined, NaN => falsy

//Logical operator
// &&, ||, !

let days = "Sunday";

console.log(days === "Sunday" || days === "Saturday");

let percentage = 65;
console.log(percentage >= 45 || percentage < 80);

const arr1 = [1, 2, 3]; 
const arr2 = [3, 2, 1];

// console.log(arr1 == arr2);

console.log(0 === false);

//Concatenation
// + ,

  console.log("Hello", "there");
console.log("Hello" + " " + "there");

let num1 = 10;
let num2 = "10";

let res = num1 + Number(num2) + 10 + 20;
console.log(res);
// /10101020/; if not typecasted

console.log(num1 - num2);
console.log(num1 * num2);
console.log(0.1 + 0.2); //JavaScript is loosely script

// TypeCasting in + using and making a string to Number Datatype
// "10" => 10
//"10a" => 10
//"abc10" => 0

//Conditional Operartor(one liner if-else)
//(expression) ? true : false


const age = 18;
const canVote = (age >= 18) ? "yes" : "No";
console.log(canVote);




let day = "Friday";

console.log((day === "Friday") ? "Weekday" : (
  (day === "Saturday" || day ==="Sunday")? "Holiday": (
    (day === "Monday" || day === "Tuesday" || day === "Wednesday") ? "Weekday" : "Provide correct day name"
  )
) );


//Nullish Coalescing

const userObj = {
  age : null
}

const userAge = userObj.age ?? 10
console.log(userAge);

console.log(100 ?? 0);


console.log(null || 10);
console.log(0 || undefined);


//Template Literals
//Optional Chaining
//Destructure
//Spread and Rest

const fullName = "Keshang"
const counterNotification = 10
const link = "http://abc.com/notifications"

let emailTmp = `Dear  ${fullName}, you have received ${counterNotification} notification in your account.
Do check your account in ${link}`; //`BackTick`

console.log(emailTmp);

const userObjectData = {
  name: "Keshang Gurung"
}

console.log(userObjectData.name);
console.log(userObjectData.age?.prop); //undefined /error

const response = {
  users: [
    { name: "Alice" },
    { name: "Bob" }
  ]
};

console.log(response?.users?.[1]?.name); // "Bob"

const productInfo = {
  name: "Macbook air",
  brand: "apple",
  price: 123456,
  discount: 10,
  stock: 5,
  color: "gray"
}

// const name = productInfo.name;
// const price = productInfo.price;
// const color = productInfo.color

const {name, price, color: productColor} = productInfo; // changing the name of the property in destructuring is called aliasing or alias.
console.log(productColor);
// console.log(color);

const num_1 = [1,2,3,4,5];
const num_2 = [6,7,8,9,10]

const numbs = [num_1, num_2];
const numbss = [...num_1,...num_2];

console.log(numbs);
console.log(numbss);

day = "Monday";

if(day === "Friday") {
  console.log("Weekend");
  
} else if(day === "Saturday" || day === "Sunday") {
  console.log("Holiday");
  
} else {
  console.log("Weekday");
  
}


//switch case are used in legacy project

// [1,2,3,4,5,6,7,8,9,10] => Flat Array
//Shallow copy and deep copy
