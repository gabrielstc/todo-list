import styles from "./NoContent.module.css";
import clipboard from "../assets/clipboard.svg";

export function NoContent() {
  return (
    <div className={styles.taskListContainerNoContent}>
      <img
        src={clipboard}
        alt="clipboard icon"
        className={styles.clipBoardIcon}
      />
      <div className={styles.noContent}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </div>
    </div>
  );
}
