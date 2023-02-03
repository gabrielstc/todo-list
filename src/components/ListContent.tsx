import styles from "./ListContent.module.css";
import trashIcon from "../assets/trash.svg";
interface ListContentProps {
  title: string;
  isComplete: boolean;
  id: string;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function ListContent({
  title,
  isComplete,
  id,
  onCompleteTask,
  onDeleteTask
}: ListContentProps) {
  const handleCompleteTaskButton = () => {

    onCompleteTask(id);
  };

  const handleDeleteTaskButton = () => {

    onDeleteTask(id);
  };
  return (
    <div className={styles.taskContainer}>
      <input
        className={styles.checkBox}
        type="radio"
        checked={isComplete}
        id="radio"
      />
      <label htmlFor="radio" onClick={handleCompleteTaskButton}>
        <span className={styles.radio}></span>
      </label>

      <p className={isComplete ? styles.striked : ""}>{title}</p>

      <img className={styles.trashIcon} src={trashIcon} alt="trash icon" onClick={handleDeleteTaskButton}/>
    </div>
  );
}
