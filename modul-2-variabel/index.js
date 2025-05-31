//variable

//var hanya dapat diakses didalam scope
// if (true) {
//   var nama = "rey"
// } //ini namanya scope rey

// console.log('var :', nama)


//let tidak bisa di akses diluar scope, tapi didalam scope
// if (true) {
//   let nama = "rey";
//   console.log("let :", nama);
// } //ini namanya scope rey

// console.log("let :", nama);
//jika tetap menggunakan maka eror


//const, sama gabisa di akses diluar scope, tetapi di dalam scope, tapi nilai nya tidak bisa diubah
if (true) {
  const nama = "rey";
  console.log("const :", nama);
  // nama = "anjay" //ini contoh jika nilainya diubah maka akan eror
} //ini namanya scope rey