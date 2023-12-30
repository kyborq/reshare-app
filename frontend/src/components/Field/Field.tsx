import styles from "./Field.module.css";

type Props = {
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
};

export const Field: React.FC<Props> = ({ label, icon, placeholder }) => {
  return (
    <label className={styles.Field}>
      <span className={styles.Label}>{label}</span>
      <div className={styles.Container}>
        {icon}
        <input type="text" className={styles.Input} placeholder={placeholder} />
      </div>
    </label>
  );
};
