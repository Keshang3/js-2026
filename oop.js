// parent
// class User {
//   name;
//   email;
//   address;
//   phone;

//   constructor(name, email, address, phone) {
//     this.name = name;
//     this.email = email;
//     this.address = address;
//     this.phone = phone;
//     console.log("I am from user class");
    
//   }

//   getUserProfile() {};
// }

// child or derives class
// class Customer extends User {
//   constructor(name, email, address, phone) {
//     super(name, email, address, phone);
//     //this
   
//     console.log("I am from Customer");
//     //return
//   }
//   canBuy(){}
// }

// class Seller extends User {
//   canSell(){}
// }

// const customerObj = new Customer("Keshnag Gurung", "gurungkesh@gmail.com", "Kathmandu", 9876543210);
// console.log(customerObj);

// const sellerObj = new Seller();
// console.log(sellerObj);



// class Database {
   // #connection
   // constructor() {
   //   db connection
  // }

//   getConnection()  {
//     console.log("Connectionm from Database");
    
//   }
// }

// class Auth extends Database {
//   // #dbConnection;

//   getConnection = () => {
//     //overriding
//     super.getConnection();
//     console.log("Connection from Auth");
    
//   }
// }


// const obj = new Auth();
// obj.getConnection();



// class Person {
//   static name;
//   static hello(){
//     return "I am Static Hello";
    
//   }

// }

// const nam = Person.name = "hello"
// console.log(nam);
// console.log(Person.hello());


// class Database{
//   #connection = "Secret DB Connection";
//   getConnection() {
//     //connection
//     return this.#connection;
//   }
// }
    
    



// class Auth extends Database{
//  test() {
//   console.log(this.getConnection());
  
//  }
// }


// const authObj = new Auth();






