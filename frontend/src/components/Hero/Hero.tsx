import styles from "./Hero.module.css";

type Props = {
  title?: string;
  text?: string;
  children?: React.ReactNode;
};

export const Hero: React.FC<Props> = ({ title, text, children }) => {
  return (
    <div className={styles.Hero}>
      {!!title && <h2 className={styles.Title}>{title}</h2>}
      {!!text && <span className={styles.Text}>{text}</span>}
      {children}
    </div>
  );
};
