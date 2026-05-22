const funct1 = async (x) => {
  if (x) {
    return "Func1 is resolved";
  } else {
    throw "Func1 exception";
  }
};
const funct2 = async (x) => {
  if (x) {
    return "Func2 is resolved";
  } else {
    throw "Func2 exception";
  }
};
const funct3 = async (x) => {
  if (x) {
    return "Func3 is resolved";
  } else {
    throw "Func3 exception";
  }
};

// funct1(false)
//   .then((res1) => {
//     console.log(res1);
//     //
//     funct2(true)
//       .then((res2) => {
//         console.log(res2);
//         //
//         funct3(true)
//           .then((res3) => {
//             console.log(res3);
//           })
//           .catch((exception) => {
//             console.log(exception);
//           });
//       })
//       .catch((exception) => {
//         console.log(exception);
//       });
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });


  // Promise Chaining


// funct1(true)
//   .then((res1) => {
//     console.log(res1);
//     return funct2();
//   })
//   .then((res2) => {
//     console.log(res2)
//   })
//   .catch((exception) => {
//     console.log(exception);
    
//   })
  
//  (async () => {
//   try {
//     const result1 = await funct1(true);
//     const result2 = await funct2(true);
//     const result3 = await funct3(true);
//     console.log(result1)
//     console.log(result2)
//     console.log(result3)
    
//   } catch (exception) {
//     console.log(exception);
    
//   }
//   finally {
//     console.log("I am always execute at last");
    
//   }
// }
//  )()

// const result = funct1(true) && funct2(true) && funct3(true) -truthy and falsy values
// resolved

const result = await Promise.allSettled([funct1(false), funct3(true), funct2(true)])
const resolved = result.filter(prom => prom.status === "fulfilled"); 
const rejected = result.filter(prom => prom.status === "rejected"); 

//console.log(result);
console.log(resolved);
console.log(rejected);








