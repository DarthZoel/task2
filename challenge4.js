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

//currying untuk kalkulator
function calculator() {
    return function operator(operation) {
      return function (a) {
        return function (b) {
          switch (operation) {
            case 'add':
              return a + b;
            case 'subtract':
              return a - b;
            case 'multiply':
              return a * b;
            case 'divide':
              return a / b;
            default:
              return 'Operasi tidak valid';
          }
        };
      };
    };
  }
  
  // penggunaan
  const calculate = calculator();
  
  const add = calculate('add');
  console.log('Penambahan:', add(5)(3)); 
  
  const subtract = calculate('subtract');
  console.log('Pengurangan:', subtract(8)(2));
  
  const multiply = calculate('multiply');
  console.log('Perkalian:', multiply(4)(6));
  
  const divide = calculate('divide');
  console.log('Pembagian:', divide(10)(2));
  
