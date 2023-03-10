import { compareAsc, parseISO } from "date-fns";

const visibilityControl = function(){
    const h1= document.querySelector('h1')
  const parent= document.querySelector('.todoList') 
  const filterBy = document.querySelectorAll('nav button')
  let currentTodos;

  function Filter(todosTarget, title){
    const todolistElements= document.querySelectorAll('.todoList .added')
    currentTodos= todosTarget
    h1.textContent= title
    todolistElements.forEach(todo=> todo.remove())
    todosTarget.forEach(todo=> parent.appendChild(todo.element))
  }
  function Sort(e){
    let sortedTodos;
    switch(e.target.id){
        case 'sortName':
          currentTodos.forEach(todo=> todo.element.remove())
          sortedTodos= currentTodos.sort((a,b)=>{
             const nameA= a.name.toUpperCase();
             const nameB= b.name.toUpperCase();
             if(nameA<nameB){
              return -1
             }
             if(nameA>nameB){
              return 1
             }
             return 0
          })
          sortedTodos.forEach(todo=> parent.appendChild(todo.element))
          break;

        case 'sortTime':
          currentTodos.forEach(todo=> todo.element.remove())
          sortedTodos= currentTodos.sort((a,b)=> compareAsc(parseISO(a.date), parseISO(b.date)))
         
          sortedTodos.forEach(todo=> parent.appendChild(todo.element))
          break;

        case 'sortPriority':
          currentTodos.forEach(todo=> todo.element.remove())
          sortedTodos= currentTodos.sort((a, b)=>{
            switch(a.priority){
              case "Low":
                 a=1
                 break;
              case "Medium":
                 a=0
                 break;
              case "High":
                 a=-1
                 break;
            }
            switch(b.priority){
              case "Low":
                 b=1
                 break;
              case "Medium":
                 b=0
                 break;
              case "High":
                 b=-1
                 break;
              }

            return a-b
          })
          console.log(sortedTodos)
          sortedTodos.forEach(todo=> parent.appendChild(todo.element))
          break;
      }

  }
  function Search(value){
    const regex = new RegExp(value, 'gi');
    const todolistElements= document.querySelectorAll('.todoList .added')
    const idk= currentTodos.filter(todo=>todo.name.match(regex))
    todolistElements.forEach(todo=> todo.remove())
    idk.forEach(todo=> parent.appendChild(todo.element))
    
  }
  return {Filter, Sort, Search}
}
const manageDisplayedTodos= visibilityControl()
export default manageDisplayedTodos;
