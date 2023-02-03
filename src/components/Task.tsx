//React task component receiving props from list
import styles from "../styles/components/Task.module.css";
interface TaskProps {
    title: string;
    isComplete: boolean;
    id: string;
}
export function Task(props: TaskProps) {
    return (
        <div className={styles.taskContainer}>
        <div className={styles.task}>
            <div className={styles.taskTitle}>
            <p>{props.title}</p>
            </div>
            <div className={styles.taskButtons}>
            <button className={styles.taskButtonComplete}>Concluir</button>
            <button className={styles.taskButtonDelete}>Excluir</button>
            </div>
        </div>
        </div>
    );
}
