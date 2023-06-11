let addtodobutton = document.getElementById("addToDo");
let todocontainer = document.getElementById("todocontainer");
let inputfield = document.getElementById("inputfield");

addtodobutton.addEventListener('click',function(){
    var para =document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText = inputfield.value;
    todocontainer.appendChild(para);
    inputfield.value="";
    para.addEventListener('click',function(){
        para.style.listStyleType = "square";
        para.style.textDecoration = "dbclick";
    })
    para.addEventListener('dblclick',function(){
        todocontainer.removeChild(para);
    })
})