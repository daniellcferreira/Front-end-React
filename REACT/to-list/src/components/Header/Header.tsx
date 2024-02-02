import { StatsCards } from '../StatsCards/StatsCards';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem-vindo, Daniel!</span>
                </div>
                <div>
                    <StatsCards title='Total de Tarefas' value={5} />
                    <StatsCards title='Tarefas Pendentes' value={4}/>
                    <StatsCards title='Tarefas Concluidas' value={1} />
                </div>
            </div>
        </header>
    );
}