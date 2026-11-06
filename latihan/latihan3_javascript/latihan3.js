let outputDiv = document.getElementById("output3");

// 1. Tombol Ubah Latar Belakang
let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
    document.body.style.backgroundColor = "#e8f4fc";
};

// 2. Tombol Ubah Warna Teks
let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
    document.body.style.color = "#2c3e50";
};

// 3. Tombol Perbesar Font
let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + "px";
};

// Menambahkan tombol ke halaman
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);