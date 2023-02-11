const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const tasksList = document.getElementById("tasks");

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", toggleTaskDone);

function addTask(event) {
  event.preventDefault();
  if (!taskInput.value) return;

  const task = document.createElement("li");
  task.innerHTML = taskInput.value;
  tasksList.appendChild(task);

  taskInput.value = "";
}

function toggleTaskDone(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}
