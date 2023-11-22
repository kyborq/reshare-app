import styles from "./Card.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.Card}>{children}</div>;
};
