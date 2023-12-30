import styles from "./Form.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Form: React.FC<Props> & {
  Content: React.FC<ContentProps>;
} = ({ title, children }) => {
  return (
    <form className={styles.Form}>
      <h2 className={styles.Title}>{title}</h2>
      {children}
    </form>
  );
};

type ContentProps = {
  children?: React.ReactNode;
};

Form.Content = ({ children }: ContentProps) => {
  return <div className={styles.Content}>{children}</div>;
};
