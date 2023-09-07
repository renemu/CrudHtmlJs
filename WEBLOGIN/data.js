function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") return;

    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    taskInput.value = "";
    displayTasks();
}

// Fungsi untuk menghapus tugas
function deleteTask(index) {
    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTasks();
}

// Fungsi untuk menampilkan tugas
function displayTasks() {
    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskTable = document.getElementById("taskList");
    taskTable.innerHTML = "";

    for (var i = 0; i < taskList.length; i++) {
        var task = taskList[i];
        var row = "<tr><td>" + (i + 1) + "</td><td>" + task + "</td><td><button class='button' onclick='deleteTask(" + i + ")'>Hapus</button></td></tr>";
        taskTable.innerHTML += row;
    }
}

// Fungsi untuk memuat tugas saat halaman dimuat
window.onload = function () {
    displayTasks();

    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", addTask);
};