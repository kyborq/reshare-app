import styles from "./ActionButton.module.css";

type Props = {
  icon: React.ReactNode;
  label?: string;
  backgroundColor?: string;
  onClick?: () => void;
};

export const ActionButton: React.FC<Props> = ({
  icon,
  label,
  backgroundColor,
  onClick,
}) => {
  return (
    <button
      className={styles.Button}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
};
