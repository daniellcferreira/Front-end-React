const form = document.querySelector("#to-do-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#to-do-list");

let tasks = [];

form.addEventListener("submit", (event) => {
    event.preventDefault() // Evita recarregar a pagina ao submeter o formulario

    const taskTitle = taskTitleInput.value 
    if (taskTitle < 3) {
        alert("Sua tarefa precisa ter pelos menos, 3 caracteres!");
        return;
    }
    // Adicionando a nova tarefa no array
    tasks.push({
        title: taskTitle,
        done: false,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Adicionando a nova tarefa no HTML
    const li = document.createElement("li");
    
    const input = document.createElement("input"); // criando a tag <input/>
    input.setAttribute("type", "checkbox"); // criando a propriedade dentro da tag <input type="checkbox"/>
    input.addEventListener("change", (event) => {
        const liToggle = event.target.parentElement;

        const spanToggle = liToggle.querySelector("span");

        const done = event.target.checked;
        if(done) {
            spanToggle.style.textDecoration = "line-through";
        } else {
            spanToggle.style.textDecoration = "none";
        }

        tasks = tasks.map(t => {
            if(t.title === spanToggle.textContent) {
                return {
                    title: t.title,
                    done: !t.title,
                }
            }
            return t;
        })

        localStorage.setItem("tasks", JSON.stringify(tasks));
    })

    const span = document.createElement("span");
    span.textContent = taskTitle;

    const button = document.createElement("button");
    button.textContent = "Remover";
    button.addEventListener("click", (event) => {
        const liRemove = event.target.parentElement;

        const titleRemove = liRemove.querySelector("span").textContent

        tasks = tasks.filter(t => t.title !== titleRemove);

        todoListUl.removeChild(liRemove);

        localStorage.setItem("tasks", JSON.stringify(tasks));
    })

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    todoListUl.appendChild(li);

    taskTitleInput.value = '';



})
