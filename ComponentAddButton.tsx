import styles from "./ComponentAddButton.module.css";
import BlueprintPreview from "../BlueprintPreview/BlueprintPreview";
import { BLUEPRINTS } from "../../blueprints";
import { hydrateTemplate } from "../../utils/template";

type ComponentAddButtonProps = {
  blueprintId: string;
  onAddInstance: (blueprintId: string) => void;
};

const ComponentAddButton = ({
  blueprintId,
  onAddInstance,
}: ComponentAddButtonProps) => {
  const blueprint = BLUEPRINTS[blueprintId];
  if (!blueprint) return null; // Handle cases where blueprintId might not exist

  return (
    <article className={styles.card}>
      <div className="card-content">
        <BlueprintPreview
          html={hydrateTemplate(blueprint.template, blueprint.defaultData)}
        />

        <button
          type="button"
          className={styles.mainAction}
          onClick={() => onAddInstance(blueprintId)}
        >
          Add {blueprint.name}
        </button>
      </div>
    </article>
  );
};
export default ComponentAddButton;
