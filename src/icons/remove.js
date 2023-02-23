function removeTodo(todolist, todo){
    todo.element.remove()
    todolist.deletetodo(todo)
}

export default removeTodo