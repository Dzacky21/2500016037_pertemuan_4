let form = document.createElement("form");

// Input Nama
let labelNama = document.createElement("label");
labelNama.textContent = "Nama:";
let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.id = "nama";

// Input Email
let labelEmail = document.createElement("label");
labelEmail.textContent = "Email:";
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";

// Tombol Submit
let btnSubmit = document.createElement("button");
btnSubmit.type = "button";
btnSubmit.textContent = "Submit";

// Area Pesan Error / Sukses
let errorDiv = document.createElement("div");
errorDiv.id = "error-message";

// Validasi Form saat diklik
btnSubmit.onclick = function() {
    let nama = inputNama.value.trim();
    let email = inputEmail.value.trim();
    let errorMessage = "";

    if (nama === "") {
        errorMessage += "Nama tidak boleh kosong. ";
    }
    if (email.indexOf("@") === -1) {
        errorMessage += "Email harus mengandung @. ";
    }

    if (errorMessage !== "") {
        errorDiv.style.color = "#dc3545";
        errorDiv.textContent = errorMessage;
    } else {
        errorDiv.style.color = "#28a745";
        errorDiv.textContent = "Form valid! Data berhasil dikirim.";
    }
};

// Menyeleksi & menyusun elemen secara berurutan ke bawah
form.appendChild(labelNama);
form.appendChild(inputNama);
form.appendChild(document.createElement("br"));

form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(document.createElement("br"));

form.appendChild(btnSubmit);
form.appendChild(errorDiv);

// Render ke dalam DOM
let outputDiv = document.getElementById("output4");
outputDiv.appendChild(form);