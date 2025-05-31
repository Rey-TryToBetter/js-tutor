/* tipe data primitif */

//string  
const nama = "rey"
const kota = "Surabaya kota ter L"
const area = `${nama} Surabaya kota ter L`

//number
const umur = 17.5

//boolean
const isAnjay = true

//undifined
let x
// var a;
//jadi kalau mau undifined harus pake var/let

//null  
const person = null

//Symbol
const symbol1 = Symbol("deskripsi 1")

//bigInt
const bigInt1 = 120802180128028n


/* tipe data reference */

//objek
const orang = {
  nama: "Rey",
  umur: 17,
  asal:"Surabaya",
}

//Array
const Hobby = ["basket", "tidur"]

//function
function sayHello() {
  return "semangat belajarnya"
}
//kalau manggilnya menggunakan () itu maka tipe datanya akan menjadi string, karena yang dipanggil itu di return nya


//output
const output = sayHello
console.log(output, typeof output)

/* perbedaan tipe data primitf dan tipe data reference */

//tipe data primitif 

let a = 15
let b = a //'b' menyimpan salinan nilai dari 'a', maka b = 15

console.log(b) //outputnya akan 15

//tipe data reference
let obj1 = {nama: "rey"}
let obj2 = obj1 // obj2 akan menyimpan referensi yang sama dengan obj1
obj1.nama = "rizki"

console.log(obj2)

//homework
let ab = 10
let bc = ab
ab = 20

console.log(bc)