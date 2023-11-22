import { CodeIcon, HelpIcon, KeyIcon } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <Logo />
        <div className={styles.Navigation}>
          <Button icon={<CodeIcon />} />
          <Button icon={<HelpIcon />} />
          <Button icon={<KeyIcon />} label="Войти" />
        </div>
      </div>
    </header>
  );
};
