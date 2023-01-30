import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Rocket Logo" />
      to<span className={styles.halfColor}>do</span>
      
    </header>
  );
}
