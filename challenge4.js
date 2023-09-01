/**
 * 1. Rubah function calculator menjadi arrow function
 * 2. Rubah function Konversi Celsius ke Fahrenheit menjadi arrow function dan currying
 */

// Arrow Function Calculator (nomer 1)
let calculator = (num1, num2, operator) =>{
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "masukan angka dongs ahhhh"
    }
    switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":          
          return num1 / num2;
        default:
          return "Operator tidak valid";
      }
}

console.log(calculator(10,"k","/"))
console.log(calculator(10,2,"/"))

//nomer 2
// arrow
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit(50))

//currying
function celsiusToFahrenheitCurried(celsius) {
    return function() {
      return (celsius * 9/5) + 32;
    };
  }

  const curry = celsiusToFahrenheitCurried(60)
  console.log(curry())
