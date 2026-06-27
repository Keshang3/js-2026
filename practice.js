// class Temperature{
//   c = 12;
//   f = 12;
//   conversion ( temp, scale) {
//     if (temp === 0 && scale === "F") {
//       C = (f-32) * 5/9;
//       console.log(C);

//     }
//     else{
//       f = (c * 5/9) *32;
//       console.log(f);

//     }
//   }
// }

// let  tempp = new Temperature();
// tempp.conversion(2, 0, "F")

//  class NumberFormatter {

//  }

// Develop a js class named `Temperature`. Define a function to convert the proivded temperature to given scale.
// -  for e.g if temperature = 0, scale = "c" => convert to Celcius, the temperature is F
// -  for e.g if temperature = 0, scale = "f" => convert to Fahrenheit, the temperature is C
// -c = (f-32) * 5/9
// -f = (c*5/9) + 32

//  class Temperature{
//   temperature;
//   constructor(temperature){
//     this.temperature = temperature;
//   }
//   convert(scale){
//     if(scale.toLowerCase() === "c"){
//       const celcius = (this.temperature-32) * 5/9;
//       console.log(celcius);

//     }
//     else if(scale.toLowerCase() === "f"){
//       const Fahrenheit = (this.temperature * 9/5) + 32;
//       console.log(Fahrenheit);

//     }
//   }

//  }

// //  const temp1  = new Temperature(0);
// //  temp1.convert("c")

//  const temp2  = new Temperature(0);
//  temp2.convert("f")

// Develop a JS class named `Distance`.
// Define a function to convert distance between kilometers and miles.
//
// - if distance = 10, scale = "k" => convert miles to kilometers
// - if distance = 10, scale = "m" => convert kilometers to miles
//
// Formula:
// kilometers = miles * 1.609
// miles = kilometers / 1.609

// class Distance{
//   distance;
//   constructor(distance){
//     this.distance = distance;
//   }

//   convertor(scale){
//     if(scale.toLowerCase() === "k"){
//       const kilometers = this.distance * 1.609;
//       return kilometers;
//     }
//     else if(scale.toLowerCase() === "m") {
//       const miles = this.distacne / 1.609;
//       return miles;
//     }
//   }
// }

// const d = new Distance(10);
// console.log(d.convertor("k"));

// Develop a class named "NumberFormatter". The class must contain necesary function to append an ordinal suffixes to a number and abbrevate large numbers

// class NumberFormatter{
//   static ordinal(num) {
//     const lastTwo =  num % 100;
//     const lastOne =  num % 10;

//     // special case 11 12 13
//     if(lastTwo>=11 && lastTwo<=13){
//       return num + "th";
//     }

//     else if(num % 10 === 1){
//       return num + "st"
//     }
//     else if(num % 10 === 2){
//       return num + "nd"
//     }
//     else if(num % 10 === 3){
//       return num + "rd"
//     }
//     else{
//       return num + "th"
//     }

//   }
// }

class NumberFormatter {
  static ordinal(num) {
    const lastTwo = num % 100;
    const lastOne = num % 10;

    // Special case: 11th, 12th, 13th
    if (lastTwo >= 11 && lastTwo <= 13) {
      return num + "th";
    } else if (lastOne === 1) {
      return num + "st";
    } else if (lastOne === 2) {
      return num + "nd";
    } else if (lastOne === 3) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
}
const retrn = NumberFormatter.ordinal(20);
console.log(retrn);
