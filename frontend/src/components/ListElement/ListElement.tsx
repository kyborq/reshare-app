import { FileIcon } from "../../assets/icons";
import { cutLongText } from "../../utils/cutLongText";
import { toReadableDate } from "../../utils/toReadableDate";
import styles from "./ListElement.module.css";

type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

export const ListElement: React.FC<Props> = ({ title, text, children }) => {
  return (
    <div className={styles.ListElement}>
      <FileIcon width={48} height={48} />
      <div className={styles.Meta}>
        <span className={styles.Title}>{cutLongText(title)}</span>
        <span className={styles.Text}>{toReadableDate(text)}</span>
      </div>
      <div className={styles.Actions}>{children}</div>
    </div>
  );
};
