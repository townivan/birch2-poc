import { FiXCircle } from "react-icons/fi";
import styles from "./EditPanel.module.css";
import { useEmailStore } from "../../store";

const EditPanel = () => {
    const toggleEditPanel = useEmailStore((state) => state.toggleEditPanel);

    return (
        <div className={styles.editPanel}>
            <div className={styles.header}>
                <div className={styles.col1}>EditPanel</div>
                <div className={styles.col2}>
                    <button type="button" onClick={toggleEditPanel}>
                        <FiXCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPanel;
