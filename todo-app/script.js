document.addEventListener('DOMContentLoaded', () => {
    

let sub = document.getElementById('add-task-btn')
let inpvalue = document.getElementById('todo-input')
let parent = document.getElementById('todo-list')

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
tasks.forEach(task => renderTasks(task));


sub.addEventListener('click',() =>{
    let textVal = inpvalue.value.trim()

    if (textVal === "" ) {
        alert("Empty Task Field");
        return
    }

    const newtask = {
        id : Date.now(),
        text : textVal,
        completed : false
    }
    tasks.push(newtask)
    savetasks(tasks)
    renderTasks(newtask)

    inpvalue.value = ""
    inpvalue.focus()

})

function savetasks(task){
    localStorage.setItem("tasks", JSON.stringify(task))
}

function renderTasks(task){
    const newli = document.createElement('li')
    newli.textContent = task.text;

    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'X';

    const completebtn = document.createElement('button')
    completebtn.textContent = '🗸';
    completebtn.classList.add('completebtn')

    newli.appendChild(deletebtn)
    newli.appendChild(completebtn)
    parent.appendChild(newli)

    deletebtn.addEventListener('click',() => {
        newli.remove()

        tasks = tasks.filter(t => t.id !== task.id)
        savetasks(tasks)
    })

    if(task.completed){
        completebtn.remove()
        deletebtn.style.textDecoration = 'none'
        deletebtn.style.opacity= 1
        newli.classList.add('completed')
    }

    completebtn.addEventListener('click',() => {
        completebtn.remove()
        newli.classList.add('completed')
        task.completed = true
        savetasks(tasks)
    })
}
})