export function editTodofunc(todo){ 
  const editformbg= document.querySelector('.editTodo')
  editformbg.classList.remove('hidden')
  const editform = document.querySelector('.todoEditform')
  const editB = document.querySelector('.editcancelB')
  
  editform.addEventListener('submit', editTodoObject, {once:true})
  
  editB.addEventListener('click', e=>{
      editform.removeEventListener('submit', editTodoObject)
      editformbg.classList.add('hidden')
  })    
  function editTodoObject(){
      const edittodoDate= document.getElementById('editdate')
      const edittodoName= document.getElementById('editname')
      const edittodoType = document.getElementById('edittag')
      const edittodoPriority = document.getElementById('editpriority')
      const edittodoDescription= document.getElementById('editdescription')
      const editinputs = [edittodoName, edittodoDate, edittodoType, edittodoPriority, edittodoDescription]
      const values = [] 
      editinputs.forEach(input=> values.push(input.value))
      todo.editTodo(...values)
      editformbg.classList.add('hidden')
      const h2name= todo.element.querySelector('h2')
      h2name.textContent = todo.name
  }
  }

