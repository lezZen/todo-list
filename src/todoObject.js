class Todo{ 
  
    constructor(name, date, type, priority, description){
    this.name= name;
    this.description= description;
    this.date= date;
    this.type= type;
    this.priority= priority;
    this.element;
    
  }
    editTodo(newName,newdate, newtype, newpriority, newDescription){
  
    this.name= newName;
  
    this.description= newDescription;
  
    this.date= newdate;
  
    this.type= newtype;
    
    this.priority= newpriority;
  }  
  }
  export default Todo
  