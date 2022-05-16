//Seleção do DOM
const todoInput = document.querySelector('#task-input');
console.log(todoInput)
const todoButton = document.querySelector('#task-button');
console.log(todoButton)
const todoList = document.querySelector('#task-list');
console.log(todoList)

//Eventos 

todoButton.addEventListener('click', addTodo)

//Funções
function addTodo(event){
    event.preventDefault()


    document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}























    /* const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-li')
    todoLi.innerText = 'hello jesus '

    
    

    todoDiv.appendChild(todoLi)

    const completedButton = document.createElement('checkbox')
    completedButton.innerHTML = '<input class="checkmark" type="checkbox"></i>'
    completedButton.classList.add('completed-btn')
    todoDiv.appendChild(completedButton)

    todoList.appendChild(todoDiv) */
}