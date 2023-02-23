/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createTodoDOM.js":
/*!******************************!*\
  !*** ./src/createTodoDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _svg_delete_1_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/delete-1-svgrepo-com.svg */ "./src/svg/delete-1-svgrepo-com.svg");
/* harmony import */ var _svg_edit_2_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/edit-2-svgrepo-com.svg */ "./src/svg/edit-2-svgrepo-com.svg");
/* harmony import */ var _svg_info_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/info-circle-svgrepo-com.svg */ "./src/svg/info-circle-svgrepo-com.svg");
/* harmony import */ var _icons_manageIconsEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/manageIconsEvents */ "./src/icons/manageIconsEvents.js");






function createTodoDOM(todolist, todo){
    const addtodo= document.querySelector('.toadd')
    const todosSection= document.querySelector('.todoList')
    const todoAndDetails= document.createElement('div')
    const todoContainer= document.createElement('div')

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
    infoImg.src= _svg_info_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__
    infoImg.className= "info"

    const editImg = document.createElement('img')
    editImg.src=_svg_edit_2_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__
    editImg.className="edit"

    const deleteImg = document.createElement('img')
    deleteImg.src= _svg_delete_1_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__
    deleteImg.className="delete"

    todoIcons.append(infoImg, editImg, deleteImg)

    todoContainer.appendChild(todoTitle)
    todoContainer.appendChild(todoIcons)
    todoAndDetails.appendChild(todoContainer)
    todosSection.appendChild(todoAndDetails)

    ;(0,_icons_manageIconsEvents__WEBPACK_IMPORTED_MODULE_3__.manageIconsEvents)(todo, todolist, infoImg, editImg, deleteImg)


   addtodo.classList.add('hidden')
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoDOM); 


/***/ }),

/***/ "./src/icons/editTodo.js":
/*!*******************************!*\
  !*** ./src/icons/editTodo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTodofunc": () => (/* binding */ editTodofunc)
/* harmony export */ });
function editTodofunc(todo){ 
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



/***/ }),

/***/ "./src/icons/info.js":
/*!***************************!*\
  !*** ./src/icons/info.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const InfoT = function(){
    const infocont= document.createElement('div')
    infocont.classList.add('details')
    const infoname= document.createElement('h3')
    const infodate= document.createElement('span')
    const infotype= document.createElement('span')
    const infopriority= document.createElement('span')
    const infodescription= document.createElement('p')

    function addtext(todo){

    infoname.textContent= todo.name;
    infodate.textContent= todo.date;
    infotype.textContent= todo.type;
    infopriority.textContent= todo.priority;
    infodescription.textContent= todo.description;
    }

    function appendD(parent){

    infocont.append(infoname, infodate, infotype, infodescription, infopriority)
    infocont.classList.add('hidden')
    parent.appendChild(infocont)
    }

    return {addtext, appendD}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoT); 

/***/ }),

/***/ "./src/icons/manageIconsEvents.js":
/*!****************************************!*\
  !*** ./src/icons/manageIconsEvents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageIconsEvents": () => (/* binding */ manageIconsEvents)
/* harmony export */ });
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTodo */ "./src/icons/editTodo.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/icons/info.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/icons/remove.js");




function manageIconsEvents(todo, todolist, infoIcon, editIcon, deleteIcon){
    const thistodoInfo= (0,_info__WEBPACK_IMPORTED_MODULE_1__["default"])()
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
    ;(0,_editTodo__WEBPACK_IMPORTED_MODULE_0__.editTodofunc)(todo)   

    })
    deleteIcon.addEventListener('click', e=>{
    ;(0,_remove__WEBPACK_IMPORTED_MODULE_2__["default"])(todolist, todo)
    })
    
}

/***/ }),

/***/ "./src/icons/remove.js":
/*!*****************************!*\
  !*** ./src/icons/remove.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeTodo(todolist, todo){
    todo.element.remove()
    todolist.deletetodo(todo)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodo);

/***/ }),

/***/ "./src/svg/delete-1-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/svg/delete-1-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36c781cffa71f9b7cdc8.svg";

/***/ }),

/***/ "./src/svg/edit-2-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/svg/edit-2-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02aef033031fdd21b5f8.svg";

/***/ }),

/***/ "./src/svg/info-circle-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/svg/info-circle-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f3d88e06b7b387f3cf3.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTodoDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodoDOM */ "./src/createTodoDOM.js");


const todoList = function(){
  const todos= []

  function addtodo(todo){
    todos.push(todo)
  
}
function deletetodo(todo){
  const todoindex= todos.indexOf(todo)
  todos.splice(todoindex, 1)

}
function selecttodo(){
  return todos
}
function lasttodoindex(){
  return todos.length - 1
}
return{addtodo, deletetodo, selecttodo, lasttodoindex}
}

class Todo{ 
  
  constructor(name, date, type, priority, description){
  this.name= name;
  this.description= description;
  this.date= date;
  this.type= type;
  this.priority= priority;
  
}
  editTodo(newName,newdate, newtype, newpriority, newDescription){

  this.name= newName;

  this.description= newDescription;

  this.date= newdate;

  this.type= newtype;
  
  this.priority= newpriority;
}

}

const mytodolist= todoList()

const addbutton= document.querySelector('.add')
addbutton.addEventListener('click', e=>{
    addFormCont.classList.remove('hidden')

})
  

const addFormCont= document.querySelector('.toadd')
const addform= document.querySelector('.todoaddform')

addform.addEventListener('submit', e=>{
    const values= AddFormInputsValue()
    const mytodo= new Todo(...values)
    mytodolist.addtodo(mytodo)
    ;(0,_createTodoDOM__WEBPACK_IMPORTED_MODULE_0__["default"])(mytodolist, mytodo)
})

cancel.addEventListener('click', e=> addFormCont.classList.add('hidden'))
const cancel= document.querySelector('.addcancelB')


function AddFormInputsValue(){
  const todoDate= document.getElementById('adddate')
  const todoName= document.getElementById('addname')
  const todoType = document.getElementById('addtag')
  const todoPriority = document.getElementById('addpriority')
  const todoDescription= document.getElementById('adddescription')
  const inputs = [todoName, todoDate, todoType, todoPriority, todoDescription]
  const values = [] 
  inputs.forEach(input=> values.push(input.value))
  inputs.forEach(input=> input.value= '')
  return values
  }
  
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaWNvbnMvZWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ljb25zL2luZm8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ljb25zL21hbmFnZUljb25zRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pY29ucy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL3N2Zy9kZWxldGUtMS1zdmdyZXBvLWNvbS5zdmcnXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9zdmcvZWRpdC0yLXN2Z3JlcG8tY29tLnN2ZydcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL3N2Zy9pbmZvLWNpcmNsZS1zdmdyZXBvLWNvbS5zdmcnXG5pbXBvcnQgeyBtYW5hZ2VJY29uc0V2ZW50cyB9IGZyb20gJy4vaWNvbnMvbWFuYWdlSWNvbnNFdmVudHMnXG5cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0RPTSh0b2RvbGlzdCwgdG9kbyl7XG4gICAgY29uc3QgYWRkdG9kbz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYWRkJylcbiAgICBjb25zdCB0b2Rvc1NlY3Rpb249IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpXG4gICAgY29uc3QgdG9kb0FuZERldGFpbHM9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIHRvZG8uZWxlbWVudD0gdG9kb0FuZERldGFpbHNcblxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kbycpXG4gICAgdG9kb0FuZERldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWRkZWQnKVxuXG4gICAgY29uc3QgdG9kb1RpdGxlPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvQycpXG5cbiAgICBjb25zdCBjaGVja2JveD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2MnKVxuICAgIGNoZWNrYm94LnR5cGU9ICdjaGVja2JveCdcblxuICAgIGNvbnN0IHRvZG9IMj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvZG9UaXRsZS5hcHBlbmQoY2hlY2tib3gsIHRvZG9IMikgICAgXG4gICAgdG9kb0gyLnRleHRDb250ZW50PSB0b2RvLm5hbWVcbiAgICBcbiAgICBjb25zdCB0b2RvSWNvbnM9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb0ljb25zLmNsYXNzTGlzdC5hZGQoJ3RvZG9DJylcblxuICAgIGNvbnN0IGluZm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGluZm9JbWcuc3JjPSBpbmZvSWNvblxuICAgIGluZm9JbWcuY2xhc3NOYW1lPSBcImluZm9cIlxuXG4gICAgY29uc3QgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWRpdEltZy5zcmM9ZWRpdEljb25cbiAgICBlZGl0SW1nLmNsYXNzTmFtZT1cImVkaXRcIlxuXG4gICAgY29uc3QgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBkZWxldGVJbWcuc3JjPSBkZWxldGVJY29uXG4gICAgZGVsZXRlSW1nLmNsYXNzTmFtZT1cImRlbGV0ZVwiXG5cbiAgICB0b2RvSWNvbnMuYXBwZW5kKGluZm9JbWcsIGVkaXRJbWcsIGRlbGV0ZUltZylcblxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKVxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0ljb25zKVxuICAgIHRvZG9BbmREZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpXG4gICAgdG9kb3NTZWN0aW9uLmFwcGVuZENoaWxkKHRvZG9BbmREZXRhaWxzKVxuXG4gICAgbWFuYWdlSWNvbnNFdmVudHModG9kbywgdG9kb2xpc3QsIGluZm9JbWcsIGVkaXRJbWcsIGRlbGV0ZUltZylcblxuXG4gICBhZGR0b2RvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb0RPTSBcbiIsImV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb2Z1bmModG9kbyl7IFxuICBjb25zdCBlZGl0Zm9ybWJnPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRvZG8nKVxuICBlZGl0Zm9ybWJnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGNvbnN0IGVkaXRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9FZGl0Zm9ybScpXG4gIGNvbnN0IGVkaXRCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRjYW5jZWxCJylcbiAgXG4gIGVkaXRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGVkaXRUb2RvT2JqZWN0LCB7b25jZTp0cnVlfSlcbiAgXG4gIGVkaXRCLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgICAgZWRpdGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdFRvZG9PYmplY3QpXG4gICAgICBlZGl0Zm9ybWJnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0pICAgIFxuICBmdW5jdGlvbiBlZGl0VG9kb09iamVjdCgpe1xuICAgICAgY29uc3QgZWRpdHRvZG9EYXRlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdGRhdGUnKVxuICAgICAgY29uc3QgZWRpdHRvZG9OYW1lPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG5hbWUnKVxuICAgICAgY29uc3QgZWRpdHRvZG9UeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXR0YWcnKVxuICAgICAgY29uc3QgZWRpdHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0cHJpb3JpdHknKVxuICAgICAgY29uc3QgZWRpdHRvZG9EZXNjcmlwdGlvbj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRkZXNjcmlwdGlvbicpXG4gICAgICBjb25zdCBlZGl0aW5wdXRzID0gW2VkaXR0b2RvTmFtZSwgZWRpdHRvZG9EYXRlLCBlZGl0dG9kb1R5cGUsIGVkaXR0b2RvUHJpb3JpdHksIGVkaXR0b2RvRGVzY3JpcHRpb25dXG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXSBcbiAgICAgIGVkaXRpbnB1dHMuZm9yRWFjaChpbnB1dD0+IHZhbHVlcy5wdXNoKGlucHV0LnZhbHVlKSlcbiAgICAgIHRvZG8uZWRpdFRvZG8oLi4udmFsdWVzKVxuICAgICAgZWRpdGZvcm1iZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgY29uc3QgaDJuYW1lPSB0b2RvLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxuICAgICAgaDJuYW1lLnRleHRDb250ZW50ID0gdG9kby5uYW1lXG4gIH1cbiAgfVxuXG4iLCJjb25zdCBJbmZvVCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaW5mb2NvbnQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5mb2NvbnQuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpXG4gICAgY29uc3QgaW5mb25hbWU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBpbmZvZGF0ZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29uc3QgaW5mb3R5cGU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvbnN0IGluZm9wcmlvcml0eT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29uc3QgaW5mb2Rlc2NyaXB0aW9uPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIGZ1bmN0aW9uIGFkZHRleHQodG9kbyl7XG5cbiAgICBpbmZvbmFtZS50ZXh0Q29udGVudD0gdG9kby5uYW1lO1xuICAgIGluZm9kYXRlLnRleHRDb250ZW50PSB0b2RvLmRhdGU7XG4gICAgaW5mb3R5cGUudGV4dENvbnRlbnQ9IHRvZG8udHlwZTtcbiAgICBpbmZvcHJpb3JpdHkudGV4dENvbnRlbnQ9IHRvZG8ucHJpb3JpdHk7XG4gICAgaW5mb2Rlc2NyaXB0aW9uLnRleHRDb250ZW50PSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZEQocGFyZW50KXtcblxuICAgIGluZm9jb250LmFwcGVuZChpbmZvbmFtZSwgaW5mb2RhdGUsIGluZm90eXBlLCBpbmZvZGVzY3JpcHRpb24sIGluZm9wcmlvcml0eSlcbiAgICBpbmZvY29udC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbmZvY29udClcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZHRleHQsIGFwcGVuZER9XG59XG5leHBvcnQgZGVmYXVsdCBJbmZvVCAiLCJpbXBvcnQgeyBlZGl0VG9kb2Z1bmMgfSBmcm9tIFwiLi9lZGl0VG9kb1wiO1xuaW1wb3J0IEluZm9UIGZyb20gXCIuL2luZm9cIjtcbmltcG9ydCByZW1vdmVUb2RvIGZyb20gXCIuL3JlbW92ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFuYWdlSWNvbnNFdmVudHModG9kbywgdG9kb2xpc3QsIGluZm9JY29uLCBlZGl0SWNvbiwgZGVsZXRlSWNvbil7XG4gICAgY29uc3QgdGhpc3RvZG9JbmZvPSBJbmZvVCgpXG4gICAgdGhpc3RvZG9JbmZvLmFwcGVuZEQodG9kby5lbGVtZW50KVxuXG4gICAgaW5mb0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XG4gICAgICAgIGlmKHRvZG8uZWxlbWVudC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSl7XG4gICAgICAgICAgICB0aGlzdG9kb0luZm8uYWRkdGV4dCh0b2RvKVxuICAgICAgICAgICAgdG9kby5lbGVtZW50Lmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhZGRlZGluZm8nKVxuICAgICAgICAgICAgdG9kby5lbGVtZW50Lmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkaW5mbycsICdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKCF0b2RvLmVsZW1lbnQubGFzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuICAgICAgICAgICAgdG9kby5lbGVtZW50Lmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhZGRlZGluZm8nKVxuICAgICAgICAgICAgdG9kby5lbGVtZW50Lmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkaW5mbycpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2RvLmVsZW1lbnQubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB9LCAzMDApOyBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSlcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PnsgICAgICBcbiAgICBlZGl0VG9kb2Z1bmModG9kbykgICBcblxuICAgIH0pXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICByZW1vdmVUb2RvKHRvZG9saXN0LCB0b2RvKVxuICAgIH0pXG4gICAgXG59IiwiZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvbGlzdCwgdG9kbyl7XG4gICAgdG9kby5lbGVtZW50LnJlbW92ZSgpXG4gICAgdG9kb2xpc3QuZGVsZXRldG9kbyh0b2RvKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUb2RvIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNyZWF0ZVRvZG9ET00gZnJvbSAnLi9jcmVhdGVUb2RvRE9NJ1xuXG5jb25zdCB0b2RvTGlzdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHRvZG9zPSBbXVxuXG4gIGZ1bmN0aW9uIGFkZHRvZG8odG9kbyl7XG4gICAgdG9kb3MucHVzaCh0b2RvKVxuICBcbn1cbmZ1bmN0aW9uIGRlbGV0ZXRvZG8odG9kbyl7XG4gIGNvbnN0IHRvZG9pbmRleD0gdG9kb3MuaW5kZXhPZih0b2RvKVxuICB0b2Rvcy5zcGxpY2UodG9kb2luZGV4LCAxKVxuXG59XG5mdW5jdGlvbiBzZWxlY3R0b2RvKCl7XG4gIHJldHVybiB0b2Rvc1xufVxuZnVuY3Rpb24gbGFzdHRvZG9pbmRleCgpe1xuICByZXR1cm4gdG9kb3MubGVuZ3RoIC0gMVxufVxucmV0dXJue2FkZHRvZG8sIGRlbGV0ZXRvZG8sIHNlbGVjdHRvZG8sIGxhc3R0b2RvaW5kZXh9XG59XG5cbmNsYXNzIFRvZG97IFxuICBcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgdHlwZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKXtcbiAgdGhpcy5uYW1lPSBuYW1lO1xuICB0aGlzLmRlc2NyaXB0aW9uPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kYXRlPSBkYXRlO1xuICB0aGlzLnR5cGU9IHR5cGU7XG4gIHRoaXMucHJpb3JpdHk9IHByaW9yaXR5O1xuICBcbn1cbiAgZWRpdFRvZG8obmV3TmFtZSxuZXdkYXRlLCBuZXd0eXBlLCBuZXdwcmlvcml0eSwgbmV3RGVzY3JpcHRpb24pe1xuXG4gIHRoaXMubmFtZT0gbmV3TmFtZTtcblxuICB0aGlzLmRlc2NyaXB0aW9uPSBuZXdEZXNjcmlwdGlvbjtcblxuICB0aGlzLmRhdGU9IG5ld2RhdGU7XG5cbiAgdGhpcy50eXBlPSBuZXd0eXBlO1xuICBcbiAgdGhpcy5wcmlvcml0eT0gbmV3cHJpb3JpdHk7XG59XG5cbn1cblxuY29uc3QgbXl0b2RvbGlzdD0gdG9kb0xpc3QoKVxuXG5jb25zdCBhZGRidXR0b249IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKVxuYWRkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgIGFkZEZvcm1Db250LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbn0pXG4gIFxuXG5jb25zdCBhZGRGb3JtQ29udD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYWRkJylcbmNvbnN0IGFkZGZvcm09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvYWRkZm9ybScpXG5cbmFkZGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZT0+e1xuICAgIGNvbnN0IHZhbHVlcz0gQWRkRm9ybUlucHV0c1ZhbHVlKClcbiAgICBjb25zdCBteXRvZG89IG5ldyBUb2RvKC4uLnZhbHVlcylcbiAgICBteXRvZG9saXN0LmFkZHRvZG8obXl0b2RvKVxuICAgIGNyZWF0ZVRvZG9ET00obXl0b2RvbGlzdCwgbXl0b2RvKVxufSlcblxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IGFkZEZvcm1Db250LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxuY29uc3QgY2FuY2VsPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkY2FuY2VsQicpXG5cblxuZnVuY3Rpb24gQWRkRm9ybUlucHV0c1ZhbHVlKCl7XG4gIGNvbnN0IHRvZG9EYXRlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZGF0ZScpXG4gIGNvbnN0IHRvZG9OYW1lPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkbmFtZScpXG4gIGNvbnN0IHRvZG9UeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRhZycpXG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRwcmlvcml0eScpXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGRlc2NyaXB0aW9uJylcbiAgY29uc3QgaW5wdXRzID0gW3RvZG9OYW1lLCB0b2RvRGF0ZSwgdG9kb1R5cGUsIHRvZG9Qcmlvcml0eSwgdG9kb0Rlc2NyaXB0aW9uXVxuICBjb25zdCB2YWx1ZXMgPSBbXSBcbiAgaW5wdXRzLmZvckVhY2goaW5wdXQ9PiB2YWx1ZXMucHVzaChpbnB1dC52YWx1ZSkpXG4gIGlucHV0cy5mb3JFYWNoKGlucHV0PT4gaW5wdXQudmFsdWU9ICcnKVxuICByZXR1cm4gdmFsdWVzXG4gIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9