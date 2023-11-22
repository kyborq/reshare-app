import LogoIcon from "../../assets/logo.svg?react";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.Logo}>
      <LogoIcon />
      <h1 className={styles.Text}>reShare</h1>
    </div>
  );
};
