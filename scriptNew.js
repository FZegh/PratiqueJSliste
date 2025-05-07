let button= document.getElementById('addTaskButton');
let type = document.getElementById('taskInput');
let ul = document.getElementById('tasklist');



button.addEventListener('click', function() {
    let inputValue = type.value.trim();            

    if (inputValue !== ""){
        let newTask = document.createElement("li");
        newTask.textContent = inputValue; // Ajoute la tâche

   
    let deleteIcon = document.createElement("i");   //Crée l'icone de suppression
        deleteIcon.className = "fas fa-trash-alt";
        
        
    deleteIcon.addEventListener("click", function() {
            ul.removeChild(newTask);                             //Ajoute évènement de click pour supprimer la tâche
        });


        newTask.appendChild(deleteIcon);
        ul.appendChild(newTask);
        type.value = "";                        //Ajoute l'icone à la tâche
     }
    });

