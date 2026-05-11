import styles from "./Col_b_center.module.css";
import { useEmailStore } from "../../store";
import { BLUEPRINTS } from "../../blueprints";
import { hydrateTemplate } from "../../utils/template";
import BlueprintPreview from "../../components/BlueprintPreview/BlueprintPreview";

const Col_b_center = () => {
    const instances = useEmailStore((state) => state.instances);
    const toggleEditPanel = useEmailStore((state) => state.toggleEditPanel);

    return (
        <div className={styles.colCenter}>
            <div className={styles.canvas}>
                {instances.map((instance) => {
                    const blueprint = Object.entries(BLUEPRINTS).find(([id]) => id === instance.blueprintId)?.[1];
                    if (!blueprint) return null;
                    const hydratedHtml = hydrateTemplate(blueprint.template, instance.data);
                    return <BlueprintPreview key={instance.id} html={hydratedHtml} isThin={instance.isThin} onSelect={toggleEditPanel} />;
                })}
            </div>
        </div>
    );
};

export default Col_b_center;
