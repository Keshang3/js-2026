//Write a program to find Division based on percentage
//Create a variable to store scoreObtained between 0-500
// Using the following breakdown, find the division based on percentage, total is 500
// If perecentage >= 80 => Distinction
// If percentage < 80 and >=60 => first divison
// If percentage < 60 and >=45 => second divison
// If percentage < 45 and >=32 => third divison
// If percentage < 32  => Sorry! You are failed

const scoreObtained = 400;
const percentage = (100 / 500) * 100;

// if(percentage >= 80) {
//   console.log("Distinction");
// } else if(percentage >= 60 ) {
//   console.log("First Division");
// }else if(percentage>=45) {
//   console.log("Second Division");
// }else if(percentage>=32) {
//   console.log("Third Division");
// }else {
//   console.log("Sorry! You are failed");

// }

//Switch Case

switch (true) {
  case percentage >= 80:
    console.log("Distinction");
    break;
  case percentage >= 60:
    console.log("First Division");
    break;
  case percentage >= 45:
    console.log("Second Division");
    break;
  case percentage >= 32:
    console.log("Third Division");
    break;
  default:
    console.log("Sorry! you are failed");
    break;
}

// let i = 1;
// do {
//   console.log(i);
//   i++;

// } while(i <= 5) //true or false

// while(i <= 5) {
//   console.log(i);
//   i++;

// }

// for(let i=1; i<=5; i++){
//   console.log(i);

// }
//   let i = 1;

// for(; ;){
//   if(i > 5) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

const productInfo = [
  {
    productName: "Jordan",
    productBrand: "Nike",
    productCategory: "Shoes",
    productPrice: "Npr" + 6000,
    discount: "20%",
  },
  {
    productName: "Air Max",
    productBrand: "Nike",
    productCategory: "Shoes",
    productPrice: "Npr 4000",
    discount: "50%",
  },
];

// for(let i=0; i<productInfo.length; i++){
//   console.log("Name", productInfo[i].productName);
//   console.log("Brand", productInfo[i].productBrand);
//   console.log("Category", productInfo[i].productCategory);c
//   console.log("Price", productInfo[i].productPrice);
//   console.log("Discount", productInfo[i].discount);
//   console.log("*************************");
// }

// for(const val of productInfo) {
//   console.log("Name", val.productName);
//   console.log("Brand", val.productBrand);
//   console.log("Category", val.productCategory);
//   console.log("Price", val.productPrice);
//   console.log("Discount", val.discount);
//   console.log("*************************");
// }
