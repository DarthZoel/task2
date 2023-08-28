//nomer 1
//STRING
const nama = "Muhammad Zulkifli"
function panjangNama(nama){return nama.length} 
function namaToUpper(nama){return nama.toUpperCase()}
function namaToLower(nama){return nama.toLowerCase()} 
function firstLetterOnNama(nama){return nama[0]} 
function sliceName(nama){return nama.slice(0,8)}
function fusion(nama){return `${nama} Love Javascript`} 
function lastLetterOnNama(nama){ return nama[nama.length -1]}
console.log(nama,panjangNama(nama), namaToUpper(nama), namaToLower(nama), firstLetterOnNama(nama), sliceName(nama), fusion(nama), lastLetterOnNama(nama))

//MENGUBAH TIPE DATA
let age = "25"
function ageNumber(age){return parseInt(age)}
let height = "170.50"
function heightFloat(height){return parseFloat(height)}
console.log(age, ageNumber(age), height, heightFloat(height))

//NUMBER
let num1 = 10
let num2 = 5
function plus(num1, num2){ return num1 + num2}
function minus(num1, num2){return num1 - num2}
console.log(plus(num1, num2), minus(num1, num2))

//PERKALIAN DAN PEMBAGIAN
let num3 = 6
let num4 = 2
function times(num3, num4){return num3 * num4}
function divide(num3, num4){return num3 * num4}
console.log(times(num3, num4), divide(num3,num4))

//PANGKAT BILANGAN
let base = 3 
let exponent = 4
function pangkat(base, exponent){return Math.pow(base,exponent)}
console.log(pangkat(base,exponent))

//RATA RATA DARI ARRAY
let array = [5,8,12,4,6]
function arrayAverage(array){
    let temp = 0
    for(let i of array){
        let perAngka = i
        temp += perAngka
    }
    let rataRata = temp / array.length 
    return rataRata
} 
console.log(arrayAverage(array))

//BILANGAN GANJIL ATAU GENAP
let num = 7
function oddEven(num){
    if(num % 2 !== 0){
        return "Ganjil"
    } else {
        return "Genap"
    }
}
console.log(oddEven(num))

//RANDOM
function RandomNumberGenerator(){
   return Math.floor(Math.random() * 5) + 1;
} 
console.log(RandomNumberGenerator());

//nomer 2
function convert (celcius){
    let toFahrenheit = (celcius * 9/5) + 32
    return toFahrenheit
}
console.log(convert(50))

//nomer 3
function pangkat (base, exponent){
    return base ** exponent
}
console.log(pangkat(2, 3))

//nomer 4
function vocalChecker(string){
    if(string.length === 1){
        stringLower = string.toLowerCase()
        if(stringLower === "a" || stringLower === "i" || stringLower === "u" || stringLower === "e" || stringLower === "o"){
            return "Vokal"
        } else {
            return "Bukan Vokal"
        }
    }
}

console.log(vocalChecker("A"))