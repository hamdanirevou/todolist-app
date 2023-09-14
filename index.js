//reference html element in js
const formTask = document.querySelector(".form-task")

formTask.addEventListener("submit", () => {
    event.preventDefault();
//reference html element input 
    const inputform = document.querySelector(".input-form");
    console.log(inputform.value);

    //reference html element ul/ wrapper list
    const wrapperList =document.querySelector(".task-list-wrapper");

    //create document li
    const taskList = document.createElement("li");
    taskList.innerHTML = inputform.value;

    //appen li ke ul 
    wrapperList.append(taskList);

    //menghilangkan teks input
    inputform.value="";
});