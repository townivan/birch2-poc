import { useEffect, useRef } from "react";
import styles from "./blueprintPreview.module.css";

interface BlueprintPreviewProps {
  html: string;
  isSelectable?: boolean;
  isThin?: boolean;
  isEditModeActive?: boolean;
  onSelect?: () => void;
  shadowZoom?: number;
}

const BlueprintPreview = ({
  html,
  isSelectable = true,
  isThin = false,
  isEditModeActive = false,
  onSelect,
  shadowZoom = 1,
}: BlueprintPreviewProps) => {
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowRef.current) {
      // Attach shadow root if it doesn't exist, otherwise use the existing one
      const shadowRoot =
        shadowRef.current.shadowRoot ||
        shadowRef.current.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = html;
    }
  }, [html]);

  return (
    <div
      className={`${styles.blueprintPreview} ${isEditModeActive ? styles.editMode : ""}`}
      data-thin={isThin ? "true" : undefined}
      style={
        shadowZoom === 1 ? undefined : { width: "296px", marginLeft: "1px" }
      }
    >
      <div className={styles.col1}>
        <div
          ref={shadowRef}
          data-shadowbox
          style={
            shadowZoom === 1
              ? undefined
              : {
                  zoom: shadowZoom,
                  marginLeft: "3px",
                }
          }
        />
      </div>
      {isSelectable && (
        <button
          type="button"
          className={styles.fullButton}
          onClick={onSelect}
          aria-label="Select blueprint"
        ></button>
      )}
    </div>
  );
};
export default BlueprintPreview;
