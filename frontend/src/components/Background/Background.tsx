import { motion } from "framer-motion";

import styles from "./Background.module.css";
import { useEffect, useState } from "react";

export const Background = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY < 300 ? window.scrollY : 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={styles.Background}
      initial={{ translateY: 300 }}
      animate={{ translateY: -scroll }}
    />
  );
};
