"use strict"

const tasks = []

function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim(); //

    if(taskText !==""){
        tasks.push(taskText);
        const li = document.createElement("li");
        li.innerHTML = `
        <span onclick="toogleComplete(this)">${taskText}</span>
        <div class="task-buttons">
        <button onclick="deleteTask(this)">Eliminar</button>
        </div>`;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
console.log(tasks);
}
function deleteTask(btn){
    btn.closest("li").remove();
    for(let i = 0; i<tasks.length; i++){

    }
}
function toogleComplete(span){
    span.classList.toogle("task-complete");

    for(let i = 0; i<tasks.length; i++){
    if (taskTitle === tasks[i].name)
        tasks[i].complete = true;
}
}
console.log(tasks);
localStorage.setItem("tareas, tasks")

