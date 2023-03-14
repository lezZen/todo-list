import deleteIcon from './svg/delete-1-svgrepo-com.svg'
import editIcon from './svg/edit-2-svgrepo-com.svg'
import infoIcon from './svg/info-circle-svgrepo-com.svg'
import { manageIconsEvents } from './icons/manageIconsEvents'


function createTodoDOM(todolist, todo){
    const addtodo= document.querySelector('.toadd')
    const todosSection= document.querySelector('.todoList')
    const todoAndDetails= document.createElement('div')
    const todoContainer= document.createElement('div')

    switch(todo.priority){
        case 'High':
            todoContainer.classList.add("High-Priority")
            break;
        case 'Medium':
            todoContainer.classList.add("Medium-Priority")
            break;
        case 'Low':
            todoContainer.classList.add("Low-Priority")
            break;
    }

    todo.element= todoAndDetails

    todoContainer.classList.add('todo')
    todoAndDetails.classList.add('added')

    const todoTitle= document.createElement('div')
    todoTitle.classList.add('todoC')

    const checkbox= document.createElement('input')
    checkbox.classList.add('c')
    checkbox.type= 'checkbox'

    const todoH2= document.createElement('h2')
    todoTitle.append(checkbox, todoH2)    
    todoH2.textContent= todo.name
    
    const todoIcons= document.createElement('div')
    todoIcons.classList.add('todoC')

    const infoImg = document.createElement('img')
    infoImg.src= infoIcon
    infoImg.className= "info"

    const editImg = document.createElement('img')
    editImg.src=editIcon
    editImg.className="edit"

    const deleteImg = document.createElement('img')
    deleteImg.src= deleteIcon
    deleteImg.className="delete"

    todoIcons.append(infoImg, editImg, deleteImg)

    todoContainer.appendChild(todoTitle)
    todoContainer.appendChild(todoIcons)
    todoAndDetails.appendChild(todoContainer)
    todosSection.appendChild(todoAndDetails)

    manageIconsEvents(todo, todolist, infoImg, editImg, deleteImg)


   addtodo.classList.add('hidden')
}


export default createTodoDOM 
