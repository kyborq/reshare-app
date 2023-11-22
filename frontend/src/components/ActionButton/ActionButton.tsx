import styles from "./ActionButton.module.css";

type Props = {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
};

export const ActionButton: React.FC<Props> = ({ icon, label, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {label}
      {icon}
    </button>
  );
};
