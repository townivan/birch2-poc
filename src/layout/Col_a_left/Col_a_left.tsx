import styles from "./Col_a_left.module.css";
import { useEffect } from "react";
import { useEmailStore } from "../../store";
import { BLUEPRINTS } from "../../blueprints";
import ComponentAddButton from "../../components/ComponentAddButton/ComponentAddButton";

const Col_a_left = () => {
    const addInstance = useEmailStore((state) => state.addInstance);

    useEffect(() => {
        console.log("BLUEPRINTS", BLUEPRINTS);
    }, []);
    return (
        <div className={styles.colLeft}>
            {Object.keys(BLUEPRINTS)
                .filter((key) => BLUEPRINTS[key as keyof typeof BLUEPRINTS].theme === "unum")
                .map((key) => (
                    <ComponentAddButton key={key} blueprintId={key} onAddInstance={addInstance} />
                ))}
        </div>
    );
};

export default Col_a_left;
