import styles from "./Wrap.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Wrap: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.Main}>
      <div className={styles.Content}>{children}</div>
    </main>
  );
};
