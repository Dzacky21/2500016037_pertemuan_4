// Membuat elemen input dan tombol
let inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.placeholder = "Masukkan tugas baru...";
inputTask.id = "task-input";

let btnAdd = document.createElement("button");
btnAdd.textContent = "Tambah";
btnAdd.id = "add-task";

let taskList = document.createElement("ul");
taskList.id = "task-list";

// Pembungkus input dan tombol
let inputContainer = document.createElement("div");
inputContainer.className = "input-container";
inputContainer.appendChild(inputTask);
inputContainer.appendChild(btnAdd);

// Event listener tombol Tambah
btnAdd.onclick = function() {
    let taskText = inputTask.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        inputTask.value = "";
        saveTasks();
    }
};

// Fungsi menambahkan tugas ke DOM
function addTask(taskText) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "#888";
        } else {
            taskSpan.style.textDecoration = "none";
            taskSpan.style.color = "#000";
        }
        saveTasks();
    });

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", function() {
        li.remove();
        saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Fungsi menyimpan data ke localStorage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach(function(li) {
        let taskText = li.querySelector("span").textContent;
        let isCompleted = li.querySelector("input[type='checkbox']").checked;
        tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fungsi memuat data dari localStorage
function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        let tasks = JSON.parse(savedTasks);
        tasks.forEach(function(task) {
            addTask(task.text);
            let lastAdded = taskList.lastChild;
            let checkbox = lastAdded.querySelector("input[type='checkbox']");
            checkbox.checked = task.completed;
            if (task.completed) {
                let span = lastAdded.querySelector("span");
                span.style.textDecoration = "line-through";
                span.style.color = "#888";
            }
        });
    }
}

// Menampilkan elemen ke HTML
let outputDiv = document.getElementById("output5");
outputDiv.appendChild(inputContainer);
outputDiv.appendChild(taskList);

// Muat daftar tugas tersimpan saat halaman dibuka
loadTasks();