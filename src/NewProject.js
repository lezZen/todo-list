import manageDisplayedTodos from "./todosVisibilityControl";
import { mytodolist } from "./todoListObject";

const NewProjectObj= function(){
  const projects = []
  const newProjects= document.querySelector('.newProjects');
  const customTypeOptgroup= document.querySelectorAll('.custom');

  function create(){
    const newProjectName = document.createElement("span");
    const thisProjectButton= document.createElement('button')
    newProjectName.contentEditable= 'true'
    thisProjectButton.appendChild(newProjectName)
    newProjects.insertBefore(thisProjectButton, newProjects.lastElementChild);
   
    newProjectName.addEventListener("blur", function() {
      if(!newProjectName.textContent.trim().length == 0){
        edk(newProjectName, thisProjectButton)
      }else{
        thisProjectButton.remove()
       }
    });
    newProjectName.addEventListener('keydown', e=>{
      if(newProjectName.textContent.length>30) newProjectName.contentEditable="false"
      if(e.key=== 'Enter'){
        if(!newProjectName.textContent.trim().length == 0){
          edk(newProjectName, thisProjectButton)
       }else{
        newProjectName.remove()
        thisProjectButton.remove()
       }
      }
    });
    newProjectName.focus();

  }
  function loadFromStorage(){
    const projectsFromStorage= (localStorage.getItem('projects').split(","))
    projectsFromStorage.forEach(project=>{
      projects.push(project)      
      const thisProjectButton= document.createElement('button')
      thisProjectButton.textContent= project
      const newOption= document.createElement('option')
      newOption.value= project
      newOption.textContent= project
      newProjects.insertBefore(thisProjectButton, newProjects.lastElementChild);
      thisProjectButton.addEventListener('click', e=> {
        manageDisplayedTodos.Filter(mytodolist.filterByType(thisProjectButton.textContent), thisProjectButton.textContent)
      })
      customTypeOptgroup.forEach(s=> s.appendChild(newOption))
    })
   
    
  }

  function edk(newProjectName, thisProjectButton){

    const newOption= document.createElement('option')
    newOption.value= newProjectName.textContent
    newOption.textContent= newProjectName.textContent
    thisProjectButton.textContent= newProjectName.textContent
    projects.push(newProjectName.textContent)
    localStorage.setItem('projects', projects)
    thisProjectButton.addEventListener('click', e=> {
      manageDisplayedTodos.Filter(mytodolist.filterByType(thisProjectButton.textContent), thisProjectButton.textContent)
    
    })
    customTypeOptgroup.forEach(s=> s.appendChild(newOption))
    newProjectName.remove()
  }
  return{create, loadFromStorage}
  }
  const NewProject= NewProjectObj()
  export default NewProject