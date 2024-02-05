import { FormEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Taks {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks: React.FC = () => {
    const[taskTitle, setTaskTitle] = useState("");
    const[tasks, setTasks] = useState([] as Taks[]);

    //Função disparada quando o usuario adiciona um nova tarefa
    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault();

        if(taskTitle.length < 5) {
            alert('Não possivel adicionar uma tarefa com menos de 5 letras!');
            return;
        }

        //adicionar nova tarefa
        const newTasks = [
            ...tasks,
            {id: new Date().getTime(), title: taskTitle, done: false}
        ]
        setTasks(newTasks);
        setTaskTitle("");
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    useEffect(() => {
        const tasksOnLocalStorage = localStorage.getItem('tasks');

        if(tasksOnLocalStorage) {
            setTasks(JSON.parse(tasksOnLocalStorage));
        }
    }, [])

    return (
      <section className={styles.container}>
        <form onSubmit={handleSubmitAddTask}>
            <div>
                <label htmlFor="task-title">Adicionar Tarefa</label>
                <input value={taskTitle} 
                onChange={(event) => setTaskTitle(event.target.value)} 
                type="text" id="task-title" placeholder="Titulo da Tarefa" />
            </div>
            <button type="submit">Adicionar Tarefa</button>
        </form>
        <ul>
            {tasks.map(task => {
                return(
                    <li key={task.id}>
                        <input type="checkbox" id={`task-${task.id}`} />
                        <label htmlFor={`task-${task.id}`}>{task.title}</label>
                    </li>
                )
            })}
        </ul>
      </section>  
    )
}