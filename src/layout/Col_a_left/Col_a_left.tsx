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
            {/* Object.entries is vanilla JS for looping over the entries of an object.
            Here, it essentially converts the object into an array so we can use JS array methods
            like filter and map. 
            
          The filter below is using array destructuring on each entry.
          Object.entries(BLUEPRINTS) produces an array of [key, value] pairs like:
          ["TEST1", { name: "Test1 Blueprint", theme: "unum", ... }]

          The destructuring ([, blueprint]) means:
            - The first element (the key) is ignored (hence the comma with no variable name).
            - The second element (the blueprint object) is assigned to the variable "blueprint".
          This allows us to easily access the properties of the blueprint object in the filter condition.

          Reminder: Destructuring is a convenient way of extracting values from arrays or properties
          from objects into distinct variables.  
          When destructuring an array, you use square brackets [].
          When destructuring an object, you use curly braces {}.  
          In this case, since Object.entries returns an array of [key, value] pairs, we use array 
          destructuring to access the blueprint object directly.
            */}
            {Object.entries(BLUEPRINTS)
                .filter(([, blueprint]) => blueprint.theme === "unum")
                .map(([key]) => (
                    <ComponentAddButton key={key} blueprintId={key} onAddInstance={addInstance} />
                ))}
        </div>
    );
};

export default Col_a_left;
