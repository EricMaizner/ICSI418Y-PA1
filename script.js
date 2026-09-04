const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const display = document.querySelector("#task-list")
const tasks = [];

function displayTask()
{
   const container = document.createElement("tr");
   const data = document.createElement("td");
   const completeTask = document.createElement("button");
   const deleteTask = document.createElement("button");

   completeTask.textContent = "Complete";
   deleteTask.textContent = "Delete";

   completeTask.addEventListener("click",function(event)
    {
        event.preventDefault();
        container.classList = ("completed");
    });
   deleteTask.addEventListener("click", function(event)
    {
       event.preventDefault();
       container.remove(); 
    }) 

   container.className = "data-row";
   data.textContent = taskInput.value + " " + priorityInput.value;

   container.append(data, completeTask, deleteTask);
   display.appendChild(container);

};

form.addEventListener("submit", function(event) 
{
    event.preventDefault();
    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;
    const task =
    {
        name: taskName,
        priority: taskPriority,
        completed: false
    };
    tasks.push(task);
    console.log(tasks);
    displayTask();
});







