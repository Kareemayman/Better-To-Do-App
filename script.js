const input = document.querySelector('.input')
const addTask = document.querySelector('.add')
const tasks = document.querySelector('.tasks')

loadTodos()

addTask.addEventListener('click', e => {
  e.preventDefault()

  let inputValue = input.value
  input.value = ""

  addTodo(inputValue)
})

document.body.addEventListener('click', e => {
  if (e.target.matches('.delete-button')) {
    let todoArr = JSON.parse(localStorage.getItem('todoArr'))
    todoArr = todoArr.filter(todo => {
      return todo != e.target.closest('div').querySelector('p').textContent;
    })
    localStorage.todoArr = JSON.stringify(todoArr)
        
    let deleteButton = e.target
    deleteButton.closest('div').remove()
  }
})

function addTodo(inputValue) {
  let newDiv = document.createElement('div')
  
  let newDivParag = document.createElement('p')
  newDivParag.textContent = inputValue
  newDiv.append(newDivParag)

  let deleteButton = document.createElement('button')
  deleteButton.textContent = "Delete"
  deleteButton.className = "delete-button"
  newDiv.append(deleteButton)

  tasks.append(newDiv)

  let todoArr = JSON.parse(localStorage.getItem('todoArr') || "[]");

  todoArr.push(inputValue)
  localStorage.todoArr = JSON.stringify(todoArr)
}

function loadTodos() {
  let todoArr = JSON.parse(localStorage.getItem("todoArr") || "[]");

  todoArr.forEach((todo) => {
    let newDiv = document.createElement('div')
  
    let newDivParag = document.createElement('p')
    newDivParag.textContent = todo
    newDiv.append(newDivParag)
  
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.className = "delete-button"
    newDiv.append(deleteButton)
  
    tasks.append(newDiv)
  })
}