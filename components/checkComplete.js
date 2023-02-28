const checkComplete =( ) =>{
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) =>{
    const element = event.target;
    const parent = event.target.parentElement;
    
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');  
    parent.classList.toggle('task__line'); 
}

export default checkComplete;