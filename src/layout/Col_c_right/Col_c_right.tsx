import { FiCornerDownLeft } from "react-icons/fi";
import styles from "./Col_c_right.module.css";
import { useEmailStore } from "../../store";

const Col_c_right = () => {
  const closeEditPanel = useEmailStore((state) => state.closeEditPanel);

  return (
    <div className={styles.colRight}>
      <div className={styles.header}>
        <div>
          <button type="button" onClick={closeEditPanel}>
            <FiCornerDownLeft />
          </button>
        </div>
        <div>Edit Panel</div>
      </div>
    </div>
  );
};

export default Col_c_right;
