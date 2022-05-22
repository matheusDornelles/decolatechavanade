const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tasks = []

function showTasks(){
    
    for (task of tasks){
        const taskElement = document.createElement('li')
        const text = document.createTextNode(tasks)

        taskElement.appendChild(text)
        listElement.appendChild(taskElement)
    }
}
showTasks();

function addTask() {
    const text = inputElement.value
    tasks.push(text)

    showTasks()
}

buttonElement.setAttribute('onclick', 'addTask()')