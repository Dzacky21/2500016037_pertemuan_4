// Membuat fungsi menghitung luas
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

// Perhitungan pertama
let luas1 = hitungLuas(5, 8);

// Perhitungan kedua
let luas2 = hitungLuas(10, 3);

// Menampilkan hasil di halaman
document.getElementById("hasil1").textContent =
    "Luas persegi panjang (5 x 8) = " + luas1;

document.getElementById("hasil2").textContent =
    "Luas persegi panjang (10 x 3) = " + luas2;

// Menampilkan hasil di Console
console.log("Luas pertama: " + luas1);
console.log("Luas kedua: " + luas2);