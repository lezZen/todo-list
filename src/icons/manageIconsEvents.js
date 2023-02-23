import { editTodofunc } from "./editTodo";
import InfoT from "./info";
import removeTodo from "./remove";

export function manageIconsEvents(todo, todolist, infoIcon, editIcon, deleteIcon){
    const thistodoInfo= InfoT()
    thistodoInfo.appendD(todo.element)

    infoIcon.addEventListener('click', e=>{
        if(todo.element.lastChild.classList.contains('hidden')){
            thistodoInfo.addtext(todo)
            todo.element.lastChild.classList.add('addedinfo')
            todo.element.lastChild.classList.remove('removedinfo', 'hidden')
                return
        }
        if(!todo.element.lastChild.classList.contains('hidden')){
            todo.element.lastChild.classList.remove('addedinfo')
            todo.element.lastChild.classList.add('removedinfo')
            setTimeout(() => {
                todo.element.lastChild.classList.add('hidden')
            }, 300); 
            return
        }
    })
    editIcon.addEventListener('click', e=>{      
    editTodofunc(todo)   

    })
    deleteIcon.addEventListener('click', e=>{
    removeTodo(todolist, todo)
    })
    
}