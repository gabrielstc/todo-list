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
  const [newTaskText, setNewTaskText] = useState<string>("");

  const completeTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(newTasks);
  }

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }
      
  const handleCreateNewTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTaskText.trim() === "") {
      return;
    }
    const newTask = {
      id: uuidv4(),
      title: newTaskText,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };
  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value);
  };
  return (
    <div>
      <div className={styles.newTaskForm}>
        <form onSubmit={handleCreateNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
          ></input>
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
                {" "} de {tasks.length}
            </span>
          </p>
        </div>
        {tasks.length == 0 ? (
          <NoContent />
        ) : (
          tasks.map((task) => (
            <ListContent
              key={task.id}
              title={task.title}
              isComplete={task.isComplete}
              id={task.id}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
