//STRING
const nama = "Muhammad Zulkifli"
let panjangNama = nama.length
let namaToUpper = nama.toUpperCase()
let namaToLower = nama.toLowerCase()
const firstLetterOnNama = nama[0]
const sliceName = nama.slice(0,8)
let fusion = `${nama} Love Javascript`
let lastLetterOnNama = nama[nama.length -1]
console.log(nama,panjangNama, namaToUpper, namaToLower, firstLetterOnNama, sliceName, fusion, lastLetterOnNama)

// MENGUBAH TIPE DATA
let age = "25"
let ageNumber = parseInt(age)
let height = "170.50"
let heightFloat = parseFloat(height)
console.log(age, ageNumber, height, heightFloat)

//PENGECEKAN TIPE DATA
let data = true
console.log(typeof data)

//NUMBER
let num1 = 10
let num2 = 5
let penjumlahanNum1Num2 = num1 + num2
let penguranganNum1Num2 = num1 - num2
console.log(penjumlahanNum1Num2, penguranganNum1Num2)

//PERKALIAN DAN PEMBAGIAN
let num3 = 6
let num4 = 2
let num3TimesNum4 = 6 * 2
let num3DivideNum4 = 6 / 2
console.log(num3TimesNum4, num3DivideNum4)

//PANGKAT BILANGAN
let base = 3 
let exponent = 4
let result = Math.pow(base,exponent)
console.log(result)

//RATA RATA DARI ARRAY
let array = [5,8,12,4,6]
// ManualWay
let temp = 0
for(let i of array){
    let perAngka = i
    temp += perAngka
}
let rataRata = temp / array.length 
console.log(rataRata)
// builtin
let jumlahisiArray = array.reduce((total, nilai) => total + nilai)
let rataRata2 = jumlahisiArray / array.length
console.log(rataRata2)


//BILANGAN GANJIL ATAU GENAP
let num = 7
if(num % 2 !== 0){
    console.log("ganjil")
} else {
    console.log("genap")
}

//RANDOM
const RandomNumberGenerator = Math.floor(Math.random() * 5) + 1;
console.log(RandomNumberGenerator);


