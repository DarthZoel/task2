// Function Calculator (nomer 1)
function calculator(num1, num2, operator){
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

console.log(calculator(10,2,"/"))

//(nomer 2)
let vocalChecker = function(string){
    if(string.length === 1){
        stringLower = string.toLowerCase()
        if(stringLower === "a" || stringLower === "i" || stringLower === "u" || stringLower === "e" || stringLower === "o"){
            return "Vokal"
        } else {
            return "Bukan Vokal"
        }
    }
}

console.log(vocalChecker("b"))
