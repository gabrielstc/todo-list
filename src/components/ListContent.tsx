import styles from './ListContent.module.css';
import trashIcon from '../assets/trash.svg';
interface ListContentProps {
    title: string;
    isComplete: boolean;
    id: string;
}

export function ListContent ({title, isComplete}: ListContentProps) {

    return (
        <div className={styles.taskContainer}>
            <input className={styles.checkBox} type="radio" checked={isComplete} id="radio" />
            <label htmlFor="radio">
                <span className={styles.radio}></span>
            </label>
            
            <p>{title}</p>

            <div className={styles.trashIconContainer}>
                <img className={styles.trashIcon} src={trashIcon} alt="trash icon" />
            </div>
        </div>
    )
}