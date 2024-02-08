import { useContext } from 'react';
import { StatsCards } from '../StatsCards/StatsCards';
import styles from './styles.module.scss';
import { TasksContext } from '../../context/TaskContext';

export const Header: React.FC = () => {
    const {tasks} = useContext(TasksContext);

    const totalTasks = tasks.length;
    const totalPending = tasks.reduce((total, task) => {
        if(!task.done) return total + 1;
        return total;
    }, 0);
    const totalDone = totalTasks - totalPending;  

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem-vindo, Daniel!</span>
                </div>
                <div>
                    <StatsCards title='Total de Tarefas' value={totalTasks} />
                    <StatsCards title='Tarefas Pendentes' value={totalPending}/>
                    <StatsCards title='Tarefas Concluidas' value={totalDone} />
                </div>
            </div>
        </header>
    );
}