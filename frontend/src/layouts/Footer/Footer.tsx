import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <span className={styles.Text}>© reShare 2023</span>
        <div className={styles.Links}>
          <span className={styles.Link}>Соглашение</span>
          <span className={styles.Link}>Оферта</span>
          <span className={styles.Link}>Рекламодателям</span>
          <span className={styles.Link}>Правообладателям</span>
        </div>
      </div>
    </footer>
  );
};
