import styles from "./Title.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Title: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.Title}>
      <h3 className={styles.Text}>{title}</h3>
      {children}
    </div>
  );
};
