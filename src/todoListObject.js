import { isThisWeek, isToday, parseISO } from 'date-fns'
import { isLocalStorageAvailable } from './localStorageTest'

const todolist = function(){
    let todos= []
   
     function addtodo(todo){
       todos.push(todo)
       if(isLocalStorageAvailable())localStorage.setItem('elements', JSON.stringify(todos))
     
   }
   function addTodoFromStorage(todo){
     todos.push(todo)
   }
   function deletetodo(todo){
     const todoindex= todos.indexOf(todo)
     todos.splice(todoindex, 1)
     if(isLocalStorageAvailable())localStorage.setItem('elements', JSON.stringify(todos))
   
   }
   function updateStorage(){
    if(isLocalStorageAvailable())localStorage.setItem('elements', JSON.stringify(todos))
   }
   function filterByType(type){
    const filteredList= todos.filter(todo=> todo.type=== type)
     return filteredList
   }
   function filterByDay(){
     const filteredList= todos.filter(todo=> isToday(parseISO(todo.date)))
     return filteredList
   }
   function filterByWeek(){
     const filteredList= todos.filter(todo=> isThisWeek(parseISO(todo.date)))
     return filteredList
   }
   function noFilter(){
     const unFilteredList= todos
     return unFilteredList
   }   
   return{ addtodo, 
    deletetodo, 
    filterByType, 
    filterByDay, 
    filterByWeek,
    noFilter, 
    addTodoFromStorage,
    updateStorage }
   }


export const mytodolist= todolist()   
   