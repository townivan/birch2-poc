import { useEffect, useRef } from "react";
import styles from "./blueprintPreview.module.css";

interface BlueprintPreviewProps {
    html: string;
    isSelectable?: boolean;
    isThin?: boolean;
    onSelect?: () => void;
}

const BlueprintPreview = ({ html, isSelectable = true, isThin = false, onSelect }: BlueprintPreviewProps) => {
    const shadowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (shadowRef.current) {
            // Attach shadow root if it doesn't exist, otherwise use the existing one
            const shadowRoot = shadowRef.current.shadowRoot || shadowRef.current.attachShadow({ mode: "open" });
            shadowRoot.innerHTML = html;
        }
    }, [html]);

    return (
        <div className={styles.blueprintPreview} data-thin={isThin ? "true" : undefined}>
            <div className={styles.col1}>
                <div ref={shadowRef} data-shadowbox />
            </div>
            {isSelectable && <button type="button" className={styles.fullButton} onClick={onSelect} aria-label="Select blueprint"></button>}
        </div>
    );
};
export default BlueprintPreview;
