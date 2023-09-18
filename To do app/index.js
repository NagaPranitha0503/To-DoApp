const addtask=document.getElementById("add-task");
const btn=document.getElementById("add-btn");
let list=document.getElementById("list");
btn.onclick=function(){
    let task=addtask.value;
    console.log(task);
    list.innerHTML+=`
        <li class="list-items" id="list-items">${task}
        <span>X</span>
        </li> 
    `;
    addtask.value=``;
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)


