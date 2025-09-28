// cara membuat function
function sapa(nama) {
  return "Halo, " + nama + "!";
}
// kita panggil :
console.log(sapa("Andika")); // Output: Halo, Andika!

// Function tampa parameter 
function salamPagi() {
  console.log("Selamat pagi!");
}

salamPagi(); // Output: Selamat pagi!
// panggil :

// Function Expression (Simpan ke variabel)
const kali = function(a, b) {
  return a * b;
};

console.log(kali(3, 4)); // Output: 12

// Arrow function
const tambah = (a, b) => a + b;

console.log(tambah(5, 7)); // Output: 12


// // jadi intinya
// Function mempermudah kita supaya tidak menulis kode berulang-ulang.
// Function bisa punya parameter (input).
// Function bisa return hasil atau hanya melakukan aksi (seperti console.log).