import styles from "./Col_b_center.module.css";
import { useEmailStore } from "../../store";
import { BLUEPRINTS } from "../../blueprints";
import { hydrateTemplate } from "../../utils/template";
import BlueprintPreview from "../../components/BlueprintPreview/BlueprintPreview";

const Col_b_center = () => {
    const instances = useEmailStore((state) => state.instances);

    return (
        <div className={styles.colCenter}>
            <div className="canvas">
                {instances.map((instance) => {
                    const blueprint = BLUEPRINTS[instance.blueprintId as keyof typeof BLUEPRINTS];
                    if (!blueprint) return null;
                    const hydratedHtml = hydrateTemplate(blueprint.template, instance.data);
                    return <BlueprintPreview key={instance.id} html={hydratedHtml} />;
                })}
            </div>
        </div>
    );
};

export default Col_b_center;
