import { KeyIcon } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

type Props = {
  onLogin?: () => void;
};

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <Logo />
        <div className={styles.Navigation}>
          <Button icon={<KeyIcon />} onClick={onLogin} label="Войти" />
        </div>
      </div>
    </header>
  );
};
