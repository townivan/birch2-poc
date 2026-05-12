import styles from "./MainFrame.module.css";
import { useEmailStore } from "../../store";

import Col_a_left from "../Col_a_left/Col_a_left";
import Col_b_center from "../Col_b_center/Col_b_center";
import Col_c_right from "../Col_c_right/Col_c_right";
// import EditPanel from "../EditPanel/EditPanel";

const MainFrame = () => {
  const isEditPanelOpen = useEmailStore((state) => state.isEditPanelOpen);

  return (
    <div className={styles.mainFrameWrapper}>
      <section
        className={`${styles.mainFrame} ${isEditPanelOpen ? styles.shiftedLeftTransformation : ""}`}
      >
        <Col_a_left />
        <Col_b_center />
        <Col_c_right />
      </section>
    </div>
  );
};

export default MainFrame;
