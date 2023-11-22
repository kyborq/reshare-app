import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <Logo />
        <Button label="Войти" />
      </div>
    </header>
  );
};
