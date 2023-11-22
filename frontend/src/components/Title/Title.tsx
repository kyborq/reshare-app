import { DownloadIcon } from "../../assets/icons";
import { ActionButton } from "../ActionButton";

import styles from "./Title.module.css";

export const Title = () => {
  return (
    <div className={styles.Title}>
      <h3 className={styles.Text}>Мои файлы</h3>
      <ActionButton label="Загрузить" icon={<DownloadIcon />} />
    </div>
  );
};
