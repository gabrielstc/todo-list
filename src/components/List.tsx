import styles from "./List.module.css";
import clipboard from "../assets/clipboard.svg";
export function List() {
  return (
    <div>
      <div className={styles.newTask}>
        <form>
          <input placeholder="Adicione uma nova tarefa"></input>
          <button>Criar +</button>
        </form>
      </div>
      <div className={styles.tasksList}>
        <div className={styles.tasksInfo}>
          <p className={styles.tasksCreated}>Tarefas criadas <span>100</span></p>
          <p className={styles.tasksCompleted}>Concluidas <span>0</span></p>
          
        </div>
        <hr />
        <div className={styles.taskListContainer}>

        <img src={clipboard} alt="clipboard icon" className={styles.clipBoardIcon}/>
          <div className={styles.noContent}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span><p>Crie tarefas e organize seus itens a fazer</p></span>
          </div>
        </div>
      </div>
    </div>
  );
}
