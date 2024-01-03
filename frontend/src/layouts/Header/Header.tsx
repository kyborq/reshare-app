import { User } from "../../api/models/userModel";
import { KeyIcon, PremiumIcon, UserIcon } from "../../assets/icons";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

type Props = {
  user?: User;
  onLogin?: () => void;
};

export const Header: React.FC<Props> = ({ user, onLogin }) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <Logo />
        <div className={styles.Navigation}>
          {!user && (
            <Button icon={<KeyIcon />} onClick={onLogin} label="Войти" />
          )}
          {user && (
            <>
              <Button icon={<PremiumIcon />} label="Премиум" />
              <Button icon={<UserIcon />} label={user.login} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
