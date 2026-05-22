// const addNumbers = (a, b) => {
//   const c = a + b;
//   return c;
// }

// const doubleNumber = (a) => {
//   return a * 2;
// }

// const result = addNumbers(10, 20)
// const doubleValue = doubleNumber(result);
// console.log(doubleValue);

// const addNumbers = (a, b) => {

//   const c = a + b;

//   const doubleNumber = () => {
//     return c * 2;
//   }

//   return doubleNumber;

// }

// const result = addNumbers(10, 20)

// console.log((result()));
// console.log(result);

// const doubleNumber = (a) => {
//   return a * 2;
// }

// const addNumber = (a, b, cb) => {
//   let c = a + b;

//   return cb(c);
// }

// const multiplyBy2 = (x, cb) => {
//   return cb(x);
// }

// let result = addNumber(10, 20, doubleNumber);
// const  result1 = multiplyBy2(20, doubleNumber);

// console.log(result);
// console.log(result1);

// const numbers = [
//   {
//   name: "User",
//   email: "useremail.com",
//   address: "Kathmandu"
// },
//   {
//   name: "User1",
//   email: "useremail.com",
//   address: "Kathmandu"
// },
//   {
//   name: "User2",
//   email: "useremail.com",
//   address: "Kathmandu"
// },
//   {
//   name: "User3",
//   email: "useremail.com",
//   address: "Kathmandu"
// },
//   {
//   name: "User4",
//   email: "useremail.com",
//   address: "Kathmandu"
// },
// ]

// numbers.forEach((val, i) => {
//   console.log("Name :", val.name);
//   console.log("Email :", val.email);
//   console.log("Address :", val.address);
//   console.log("*******************************");

// })

// const result = numbers.map((val, i) => {
//   console.log("Name :", val.name);
//   console.log("Email :", val.email);
//   console.log("Address :", val.address);
//   console.log("*******************************");

// })

// const result = numbers.map((val, i) => {
//   console.log("Name: ", val.name);
//   console.log("Email: ", val.email);
//   console.log("Address: ", val.address);
//   console.log("********************************");
  
//   val.role = "user";
//   return val;
// })


// console.log(numbers);

// console.log(result);




// const numbers = [
//   {
//     name: "User",
//     email: "useremail.com",
//     address: "Kathmandu",
//   }, 
//   {
//     name: "User1",
//     email: "useremail.com",
//     address: "Kathmandu",
//   },
//   {
//     name: "User2",
//     email: "useremail.com",
//     address: "Kathmandu",
//   },
//   {
//     name: "User3",
//     email: "useremail.com",
//     address: "Kathmandu",
//   },
//   {
//     name: "User4",
//     email: "useremail.com",
//     address: "Lalitpur",
//   }
// ];




// let result = []

// numbers.forEach((val) => {
//   if(val.address === "Kathmandu") {
//     result.push(val);
//   }
//   console.log(result);
// })



// const res  = numbers.map((val) => {
//   if(val.address === "Kathmandu" ){
//     return val;
//   }
// });


// console.log(res);
// console.log(numbers);


//Develop an array of object with productInformation
// A product must include , name, price, discountInPercent, brand and category
// The  array must have atleast 10 products
// Create an array by filtering using (map or forEach) tp find any product with discount >=10




// const productInfo = [
//   {name: "Air Jordan",
//     price: 2000,
//     discountInPercent: 10,
//     brand: "Nike",
//     category: "Shoe"
//   },
//   {name: "Nike Air Force",
//     price: 6000,
//     discountInPercent: 9,
//     brand: "Nike",
//     category: "Shoe"
//   },
//   {name: "Gel Kayano",
//     price: 2000,
//     discountInPercent: 5,
//     brand: "ASICS",
//     category: "Shoe"
//   },
//   {name: "Ultraboost",
//     price: 2000,
//     discountInPercent: 10,
//     brand: "Adidas",
//     category: "Shoe"
//   },
//   {name: "Vans Old Skool",
//     price: 2000,
//     discountInPercent: 20,
//     brand: "Vans",
//     category: "Shoe"
//   },
//   {name: "Zenith 571G",
//     price: 4000,
//     discountInPercent: 3,
//     brand: "Caliber",
//     category: "Shoe"
//   },
//   {name: "Ultraboost 1",
//     price: 2000,
//     discountInPercent: 12,
//     brand: "Adidas",
//     category: "Shoe"
//   },
//   {name: "Dragon Sips",
//     price: 2000,
//     discountInPercent: 2,
//     brand: "Nike",
//     category: "Crocs"
//   },
//   {name: "Samba",
//     price: 2000,
//     discountInPercent: 1,
//     brand: "Adidas",
//     category: "Shoe"
//   },
//   {name: "Air Jordan 1",
//     price: 2000,
//     discountInPercent: 4,
//     brand: "Nike",
//     category: "Shoe"
//   },


// ]


// const filteredProduct = productInfo.filter((prod) => prod.discountInPercent >= 10)

// console.log(filteredProduct);



// reduce 

// const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const rest = numb.reduce((pre, val, index) => {
//   console.log({pre, val, index});
//   return (val + pre)
  
// }, 0)
// console.log(rest);



//using reduce function find the largest number from numbsl array

// const numb = [45, 3, 89, 21, 67, 98, 12, 58, 7, 34];
// const maxNum = numb.reduce((max, curr) => max >= curr ? max : curr);


// console.log(maxNum);


// const numb = [45, 3, 89, 21, 67, 98, 12, 58, 7, 34];

// //Sorting using function loop

// const rest = numb.reduce((pre, curr) => {
//   if(pre > curr) {
  
//     return curr
//   }else {
  //     return pre
  //   }
  // })
  // console.log(rest);
  
  
  // numb.sort();
  // console.log(numb);
  
  
  
  
  
  // const numb = [45, 3, 89, 21, 67, 98, 12, 58, 7, 34];

  // for(let i=0; i<=numb.length-1 ; i++) {
  //   for(let j=0; j<numb.length-1; j++){

  //     if(numb[j] > numb[j+1]){
  //       let temp = numb[j];
  //       numb[j] = numb[j+1];
  //       numb[j+1] = temp;
        


  //     }

  //   }
  // }

  // console.log(numb);
  










