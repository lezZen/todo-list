export function editTodofunc(todo, todolist){ 
  const editformbg= document.querySelector('.editTodo')
  editformbg.classList.remove('hidden')
  const editform = document.querySelector('.todoEditform')
  const editB = document.querySelector('.editcancelB')
  
  editform.addEventListener('submit', editTodoObject, {once:true})
  
  editB.addEventListener('click', e=>{
      editform.removeEventListener('submit', editTodoObject)
      editformbg.classList.add('hidden')
  })    
  function editTodoObject(e){
    e.preventDefault();
    
      const edittodoDate= document.getElementById('editdate')
      const edittodoName= document.getElementById('editname')
      const edittodoType = document.getElementById('edittag')
      const edittodoPriority = document.getElementById('editpriority')
      const edittodoDescription= document.getElementById('editdescription')
      const editinputs = [edittodoName, edittodoDate, edittodoType, edittodoPriority, edittodoDescription]
      const values = [] 
      editinputs.forEach(input=> values.push(input.value))
      todo.editTodo(...values)
      todolist.updateStorage()
      editformbg.classList.add('hidden')
      const h2name= todo.element.querySelector('h2')
      const todocont= todo.element.querySelector('.todo')
      h2name.textContent = todo.name
      switch(todo.priority){
        case 'High':
            todocont.classList.remove("Low-Priority")
            todocont.classList.remove("Medium-Priority")
            todocont.classList.add("High-Priority")
            break;
        case 'Medium':
            todocont.classList.remove("High-Priority")
            todocont.classList.remove("Low-Priority")
            todocont.classList.add("Medium-Priority")
            break;
        case 'Low':
            todocont.classList.remove("High-Priority")
            todocont.classList.remove("Medium-Priority")
            todocont.classList.add("Low-Priority")
            break;
    }
  }
  }

