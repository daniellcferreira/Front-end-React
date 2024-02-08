import { createContext, useEffect, useState } from "react";

export interface Taks {
    title: string;
    done: boolean;
    id: number;
}

interface TasksContextData {
    tasks: Taks[];
    setTasks: React.Dispatch<React.SetStateAction<Taks[]>>
}

export const TasksContext = createContext({} as TasksContextData);

interface TaksProviderProps {
    children: React.ReactNode
}

export const TaksProvider: React.FC<TaksProviderProps> = ({children}) => {
    const[tasks, setTasks] = useState([] as Taks[]);

    
    useEffect(() => {
        const tasksOnLocalStorage = localStorage.getItem('tasks');

        if(tasksOnLocalStorage) {
            setTasks(JSON.parse(tasksOnLocalStorage));
        }
    }, [])

    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}