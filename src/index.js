import createTodoDOM from './createTodoDOM'
import { mytodolist } from './todoListObject';
import  Todo  from './todoObject'
import {isLocalStorageAvaible} from './localStorageTest'
import NewProject from './NewProject';
import manageDisplayedTodos from './todosVisibilityControl';
import { borgarAndSortMenuEventListener } from './menus';
const addTodobutton= document.querySelector('.add')
const cancel= document.querySelector('.addcancelB')
const addFormCont= document.querySelector('.toadd')

addTodobutton.addEventListener('click', e=>{
    addFormCont.classList.remove('hidden')
})

cancel.addEventListener('click', e=> addFormCont.classList.add('hidden'))

const todoAddform= document.querySelector('.todoaddform')

todoAddform.addEventListener('submit', e=>{
    const values= AddFormInputsValue()
    const mytodo= new Todo(...values)
    mytodolist.addtodo(mytodo)
    createTodoDOM(mytodolist, mytodo)
})


const filterBy = document.querySelectorAll('nav button')
filterBy[0].addEventListener('click', e=>{
  manageDisplayedTodos.Filter(mytodolist.noFilter(),"All")
})
filterBy[1].addEventListener('click', e=>{
  manageDisplayedTodos.Filter(mytodolist.filterByDay(), 'Today')
})
filterBy[2].addEventListener('click', e=>{
  manageDisplayedTodos.Filter(mytodolist.filterByWeek(), 'This week')
})
for(let i=3; i<8;i++){
filterBy[i].addEventListener('click', 
e=>{
  manageDisplayedTodos.Filter(mytodolist.filterByType(filterBy[i].textContent.trim()),filterBy[i].textContent)
})
}

const addprojectB = document.querySelector('.addProjectButton');
addprojectB.addEventListener('click', NewProject.create);


const searchBar= document.getElementById('todoSearch')
searchBar.addEventListener('keydown', e=>{
  if(e.key=== 'Enter'){
    manageDisplayedTodos.Search(searchBar.value)
  }
})

borgarAndSortMenuEventListener()

getDataFromStorage()

function getDataFromStorage(){
  if(isLocalStorageAvaible()){
  JSON.parse(localStorage.getItem('elements')).forEach(es=>{
    const { name, date, type, priority,description } = es
    const mytodo= new Todo(name, date, type, priority, description)
    createTodoDOM(mytodolist,mytodo)
    mytodolist.addTodoFromStorage(mytodo)
    filterBy[0].click() 
})
NewProject.loadFromStorage()
  }else{
    return
  }
}

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
  