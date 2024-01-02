const type = document.querySelector(".type");
const todo = document.querySelector(".to-do-list")
const cross = document.querySelector("i");
const val1 = type.addEventListener("keyup",(events) =>{
     if(events.key == "Enter"){
        AddTodo(type.value)
         type.value = ""
        
     }
     
})

const AddTodo = (value) => {
const NewElm = document.createElement("li");
NewElm.innerHTML = `
 ${value}</li>
<i id="cross" class= "fa-solid fa-xmark"></i>


`
todo.appendChild(NewElm)
NewElm.querySelector("i").addEventListener("click",() => {
    NewElm.remove()
})

NewElm.addEventListener("click",() => {
    NewElm.classList.toggle("line")
})

}


// cross

