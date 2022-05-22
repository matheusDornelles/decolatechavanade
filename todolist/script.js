const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tasks = []

function showTasks(){
    
    listElement.innerHTML = ''
    
    for (task of tasks){
        const taskElement = document.createElement('li')
        const text = document.createTextNode(task)

        taskElement.appendChild(text)
        listElement.appendChild(taskElement)
    }
}
showTasks();

function addTask(){
    const text = inputElement.value
    tasks.push(text)
    inputElement.value = ''

    showTasks()
}

buttonElement.setAttribute('onclick','addTask()')