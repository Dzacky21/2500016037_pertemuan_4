function hitung(operator) {
    // 1. Mengambil nilai dari kedua input field
    let val1 = document.getElementById("angka1").value;
    let val2 = document.getElementById("angka2").value;
    let elemHasil = document.getElementById("hasil");

    // Validasi jika ada input yang belum diisi
    if (val1 === "" || val2 === "") {
        elemHasil.style.color = "#dc3545";
        elemHasil.textContent = "Harap isi kedua angka!";
        return;
    }

    // Mengubah nilai string input menjadi angka (float)
    let angka1 = parseFloat(val1);
    let angka2 = parseFloat(val2);
    let hasil = 0;

    // 2. Melakukan kalkulasi berdasarkan operator yang diklik
    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            // Penanganan jika dibagi dengan 0
            if (angka2 === 0) {
                elemHasil.style.color = "#dc3545";
                elemHasil.textContent = "Tidak dapat dibagi dengan 0!";
                return;
            }
            hasil = angka1 / angka2;
            break;
        default:
            elemHasil.style.color = "#dc3545";
            elemHasil.textContent = "Operator tidak valid";
            return;
    }

    // 3. Format hasil angka agar menggunakan titik pemisah ribuan (Format Indonesia)
    let hasilFormatted = hasil.toLocaleString('id-ID');

    // Display hasil ke elemen HTML
    elemHasil.style.color = "#2c3e50";
    elemHasil.textContent = "Hasil: " + hasilFormatted;
}