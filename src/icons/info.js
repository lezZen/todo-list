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
export default InfoT 