import { ChangeEventHandler, Ref, forwardRef } from "react";
import styles from "./Field.module.css";

type Props = {
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Field = forwardRef(
  (
    { label, icon, onChange, placeholder, value, name }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label className={styles.Field}>
        <span className={styles.Label}>{label}</span>
        <div className={styles.Container}>
          {icon}
          <input
            ref={ref}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className={styles.Input}
            placeholder={placeholder}
          />
        </div>
      </label>
    );
  }
);
