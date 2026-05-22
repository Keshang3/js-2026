// // callback - hell



// // const fucntion1 = (cb1) => {
  
// //   cb1((cb3) => {
// //   console.log("I am inside cb2");
// //   cb3();
// //   });
// // }

// // fucntion1((cb2) => {
// //   console.log("I am inside cb1");
  
// //   cb2(() => {
// //     console.log("I am inside cb3")
// //   });
// // })


// //Promise  Object
//   // object data type
//   // 3 stages
//     // pending (operational)
//     // result (2 - fullfilled/resolve, reject/exception)
//     //settlement

//   //async (api call, db operations, complex logic, IO, timers,)


//   //setTimeout is manual delay we put the timers

// // setTimeout(() => {
// //   console.log("I am inside");
  
// // }, 1000);

// // console.log(" I am last line");


// const login = () => {
//    return new Promise((resolve, reject) => {
//     const success = true ;
//     if(success) {
//       resolve({user: {name: "", email: ""}});
//     } else {
//       reject({error: "Error in login"});
//     }
//   })
 
// }

// const result = login("admin", "admin");
// result.then((data) => {
//   console.log(data)
  
// }).catch()
// result.then().catch()


// console.log("Access allow");


const login = (username, password) => {
   return new Promise((resolve, reject) => {
    const success = true;
    if(success) {
      resolve({user: {name: "", emai: ""}})
    } else {
      reject({error: "Error in login"});
    }
    
  })

  // return obj;
}

// const result = login("amdin", "admin");

// result.then((data) => {
//   console.log(data);
  
// }).catch((exception) => {
//   console.log(exception);
  
// })


// console.log("Access allow");


// const fileName = "u.s.e.r.jpg"

// const res = fileName.split(".").pop() //function chaining
// console.log(res);

// //Async Function
// const call = async() => {
// ng
// }



