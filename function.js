function addTwoNumber(a, b) {
  const c = a + b;
  return c;
}

// const addTwoNumber1 = (a, b) => {
//   const res = a + b;
//   return res;
// }

// const x = 10
// let y = 20

// // let z = addTwoNumber(x, y, 30)
// const result = addTwoNumber(10)
// // let a = addTwoNumber1(10, 20)

// // console.log(z);
// console.log(result);
// console.log(a);


// JS function type general and arrow,
//closures, callback function -> look these fucntion before class

// function functionName(a, b) {
//   //definition
// }


// const functionName = () => {
//   //definition
// }
// functionName(10, 20);

 

const validator = (arg) => {
  const handler = () => {
    console.log(arg);
    
  }

  return handler;
  
}

 const handle = validator(10);
 handle();

 //Modstly closures are used in middlewares

  

 const inputChange = () => {
  // input email, number, date
 }


 const handleChange = (cb) => {

  cb();
 }



 handleChange(inputChange);
// loop - array
// library - handle functions
// 
