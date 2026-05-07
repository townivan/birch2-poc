import styles from "./MainFrame.module.css";

import Col_a_left from "../Col_a_left/Col_a_left";
import Col_b_center from "../Col_b_center/Col_b_center";
import Col_c_right from "../Col_c_right/Col_c_right";

const MainFrame = () => {
    return (
        <section className={styles.mainFrame}>
            <Col_a_left />
            <Col_b_center />
            <Col_c_right />
        </section>
    );
};

export default MainFrame;
