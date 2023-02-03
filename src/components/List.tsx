import styles from "./List.module.css";
import clipboard from "../assets/clipboard.svg";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { NoContent } from "./NoContent";
import { ListContent } from "./ListContent";
// interface TaskType {
//   id: string;
//   title: string;
//   isComplete: boolean;
// };
// const TASKS = [
//   {
//     id: uuidv4(),
//     title: "Fazer café",
//     isComplete: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Estudar React",
//     isComplete: true,
//   },
//   {
//     id: uuidv4(),
//     title: "Estudar Next",
//     isComplete: true,
//   },
// ];

//task list with interface and uuid
interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}
const TASKS = [
  {
    id: uuidv4(),
    title: "Fazer café",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Estudar React",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Estudar Next",
    isComplete: true,
  },
];

export function List() {
  const [tasks, setTasks] = useState<TaskType[]>(TASKS);
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
          <p className={styles.tasksCreated}>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p className={styles.tasksCompleted}>
            Concluidas{" "}
            <span>
              {tasks.length > 0
                ? tasks.filter((task) => task.isComplete).length
                : 0}
            </span>
          </p>
        </div>
        {tasks.length == 0 ? (
          <NoContent />
        ) : (
          tasks.map((task) => (
            <ListContent key={task.id} title={task.title} isComplete={task.isComplete} id={task.id}/>
          ))
        )}
      </div>
    </div>
  );
}
