import { motion } from "framer-motion";
import styles from "./Card.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      className={styles.Card}
      initial={{ translateY: 500 }}
      animate={{ translateY: 0 }}
    >
      {children}
    </motion.div>
  );
};
