import manageDisplayedTodos from "./todosVisibilityControl";

export function borgarAndSortMenuEventListener(){

const sortButton= document.querySelector('.sort')
const sortMenu = document.querySelector('.sortMenu')
const closeMenu = () => {
  sortMenu.classList.remove('sort-show');
  sortMenu.classList.add('sort-hide');
  setTimeout(() => {
    sortMenu.classList.add('hidden');
  }, 300);
};
sortButton.addEventListener('click', e => {
  
e.stopPropagation(); 
if (sortMenu.classList.contains('hidden')) {
  sortMenu.classList.remove('sort-hide');
  sortMenu.classList.remove('hidden');
  sortMenu.classList.add('sort-show');
} else {
  closeMenu();
}
});

window.addEventListener('click', e => {
if (!sortMenu.contains(e.target) && e.target !== sortButton) {
  closeMenu();
}
});
sortMenu.addEventListener('input', manageDisplayedTodos.Sort)
window.addEventListener('click', e => {
  if (!sortMenu.contains(e.target) && e.target !== sortButton) {
    closeMenu();
  }
});

// borgar
const borgar = document.querySelector('.borgar')
const aside = document.querySelector('aside')

borgar.addEventListener('click', e=>{

   if(aside.classList.contains('hidden')){
        aside.classList.add('show-right')
    aside.classList.remove('hide-left', 'hidden')          
 
    return
   }

   if(!aside.classList.contains('hidden')){
    aside.classList.remove('show-right')
    aside.classList.add('hide-left')
    setTimeout(() => {
        aside.classList.add('hidden')
        
    }, 300); 
   }
})
}