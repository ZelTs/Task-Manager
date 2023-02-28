//Inmediately invoked function expression IIFE
//Son funciones en cuanto se declaran se ejecutan
//Aquí definimos la función y para que funcione debemos llamarla inmediatamente, leer línea final
( ()=>{

//Esto es para saber cuando el usuario de clic en el botón "Agregar +", lo guardamos en la const 'btn'
//Corroborar en index.html linea 34 el data atribute del botón
const btn = document.querySelector("[data-form-btn]");

/*
    La constante 'createTask' contiene la función anónima que se encarga de obtener el valor del input
    después del evento.

    Es función anónima porque no lleva nombre ejemplo, las siguientes funciones hacen exactamente lo mismo,
    solo que su sintaxis o declaración es diferente.

    - FUNCION NORMAL -

    function(evento){
        .
        ..
        ...
    }

    - FUNCION ARROW O ANONIMA - 

    (evento)=>{
        .
        ..
        ...
    }

    Si queremos ejecutarla deberemos guardarla en una const
*/

const createTask = (evento)=>{
    //Evitamos que se recargue la página al dar click en el btn
    evento.preventDefault();
    //data-form-input line 32 html
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    //Creamos las viñetas
    const task = document.createElement("li");
    //Añadimos la clase 'card' de CSS al elemento <li>
    task.classList.add("card")
    //limpiamos el input despues del clic
    input.value = "";
    
    //Creamos un elemento div
    const taskContent = document.createElement("div");
    
    //insertamos el div con lo que nos devuelve checkComplete
    taskContent.appendChild(checkComplete());

    const titleTask = document.createElement("span");
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
  
    //task.innerHTML = content;
    //Al li le metemos el div anterior
    task.appendChild(taskContent);
    //Añadimos otro elemento al padre
    task.appendChild(deleteIcon());
    //Al elemento lista quiero agregarle un hijo, esto añade las tareas una abajo de otra
    list.appendChild(task);
/*
    insertBefore(padre, hijo): Colcoa un nodo antes del otro

    replaceChild(elemento1, elemento2): Sustituye el nodo del elemtno 1 por el nodo del elemento 2

    removeChild(elemento): Remueve un nodo del árbol
*/
}

/* Cuando se de un clic en el btn, manda llamar la Función Arrow o Función anónima
   alojada en la const 'createTask'
*/
btn.addEventListener("click", createTask);

const checkComplete =( ) =>{
    const i = document.createElement("i");
    /*'fas' y 'fa-check-square' son librerias de font awesome*/
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    titleTask.classList.add('task__line');
    return i;
}

//Función para poner la palomita azul en el checklist xd

const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');    
}

const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event)=>{
    console.log("Eliminar Tarea");
    //Al dar clic en el icono de borrar la variable padre guaardara el elemento de toda esa etiqueta
    const parent = event.target.parentElement;
    parent.remove();
    console.log(parent);
}

})(); //Con el último paréntesis la llamamos inmediatamente