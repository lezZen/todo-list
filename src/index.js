import createTodoDOM from './createTodoDOM'

const todoList = function(){
  const todos= []

  function addtodo(todo){
    todos.push(todo)
  
}
function deletetodo(todo){
  const todoindex= todos.indexOf(todo)
  todos.splice(todoindex, 1)

}
function selecttodo(){
  return todos
}
function lasttodoindex(){
  return todos.length - 1
}
return{addtodo, deletetodo, selecttodo, lasttodoindex}
}

class Todo{ 
  
  constructor(name, date, type, priority, description){
  this.name= name;
  this.description= description;
  this.date= date;
  this.type= type;
  this.priority= priority;
  
}
  editTodo(newName,newdate, newtype, newpriority, newDescription){

  this.name= newName;

  this.description= newDescription;

  this.date= newdate;

  this.type= newtype;
  
  this.priority= newpriority;
}

}

const mytodolist= todoList()

const addbutton= document.querySelector('.add')
addbutton.addEventListener('click', e=>{
    addFormCont.classList.remove('hidden')

})
  

const addFormCont= document.querySelector('.toadd')
const addform= document.querySelector('.todoaddform')

addform.addEventListener('submit', e=>{
    const values= AddFormInputsValue()
    const mytodo= new Todo(...values)
    mytodolist.addtodo(mytodo)
    createTodoDOM(mytodolist, mytodo)
})

cancel.addEventListener('click', e=> addFormCont.classList.add('hidden'))
const cancel= document.querySelector('.addcancelB')


function AddFormInputsValue(){
  const todoDate= document.getElementById('adddate')
  const todoName= document.getElementById('addname')
  const todoType = document.getElementById('addtag')
  const todoPriority = document.getElementById('addpriority')
  const todoDescription= document.getElementById('adddescription')
  const inputs = [todoName, todoDate, todoType, todoPriority, todoDescription]
  const values = [] 
  inputs.forEach(input=> values.push(input.value))
  inputs.forEach(input=> input.value= '')
  return values
  }
  