import { KeyBoldIcon, UserBoldIcon } from "../../assets/icons";
import { ActionButton } from "../ActionButton";
import { Field } from "../Field";
import styles from "./Form.module.css";

type Props = {};

export const Form: React.FC<Props> = ({}) => {
  return (
    <form className={styles.Form}>
      <h2 className={styles.Title}>Добро пожаловать</h2>
      <div className={styles.Content}>
        <Field
          icon={<UserBoldIcon fill="#adb5bd" />}
          label="Электронная почта:"
          placeholder="example@mail.com"
        />
        <Field
          icon={<KeyBoldIcon fill="#adb5bd" />}
          label="Пароль:"
          placeholder="Password"
        />
      </div>
      <ActionButton icon={<KeyBoldIcon fill="#ffffff" />} label="Войти" />
    </form>
  );
};
