import { Header } from "./components/Header";
import { List } from "./components/List";
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <div className={styles.wrapper}>
        <List />
      </div>
      </main>
    </div>
  );
}

export default App;
