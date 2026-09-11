const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const display = document.querySelector("#task-list")
const tasks = [];

function displayTask()
{
   const data = document.createElement("li");
   const textName = document.createElement("span");
   const textPriority = document.createElement("span");
   const completeTask = document.createElement("button");
   const deleteTask = document.createElement("button");
   const id = taskInput.value;

   completeTask.textContent = "Complete";
   deleteTask.textContent = "Delete";

   completeTask.addEventListener("click",function(event)
    {
        event.preventDefault();
        data.classList.add("completed");
        tasks[searchTasks(id)].completed = true;
    });
   deleteTask.addEventListener("click", function(event)
    {
       event.preventDefault();
       data.remove(); 
       tasks[searchTasks(id)].name = null;
    }) 

   data.className = "data-row";
   textName.textContent = taskInput.value;
   textPriority.textContent = priorityInput.value;

   data.append(textName, textPriority, completeTask, deleteTask);
   display.appendChild(data);

};

//Allows for updating completed status in task object
function searchTasks(target)
{
    let position = -1;

    for (let index = 0; index < tasks.length; index++) 
    {
        if(tasks[index].name == target)
            position = index;
    }

    return position;
}

form.addEventListener("submit", function(event) 
{
    event.preventDefault();
    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    if(taskName.length == 0)
    {
        alert("Task field empty...");
        taskInput.focus();
    }
    else if(searchTasks(taskName) != -1)
        alert("Task already exists...");
    else
    {
        let task =
        {
            name: taskName,
            priority: taskPriority,
            completed: false
        };
        
        tasks.push(task);
        console.log(tasks);
        displayTask();
    }
});







