import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { TModalState } from "../../hooks/useModal";

import styles from "./Modal.module.css";

type Props = {
  state: TModalState;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ state, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, state.closeModal);

  return (
    <AnimatePresence>
      {state.visible && (
        <motion.div
          className={styles.Overlay}
          initial={{
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          animate={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          }}
          exit={{
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <motion.div
            ref={modalRef}
            className={styles.Modal}
            initial={{
              translateY: 100,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            exit={{
              translateY: -100,
              opacity: 0,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
