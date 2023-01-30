import styles from "./List.module.css";
export function List() {
  return (
    <div>
      <div className={styles.newTask}>
        <form>
          <input placeholder="Adicione uma nova tarefa"></input>
          <button>Criar +</button>
        </form>
      </div>
      <div>
        <div>
          <span>Tarefas criadas 0</span>
          <span>Concluidas 0</span>
          <hr />
        </div>
        <div>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
