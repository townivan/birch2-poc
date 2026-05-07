interface BlueprintControl {
    label: string;
    key: string;
    type: "text" | "color" | "textarea";
}

interface Blueprint {
    name: string;
    template: string;
    defaultData: Record<string, any>;
    theme?: string;
    controls: BlueprintControl[];
}

export const BLUEPRINTS: Record<string, Blueprint> = {
    TEST1: {
        name: "Test1 Blueprint",
        template: `<div style="background: {{bg}};"><h1>{{title}}</h1></div>`,
        defaultData: { title: "Test1", bg: "lightgreen" },
        theme: "unum",
        controls: [
            { label: "Heading Text", key: "title", type: "text" },
            { label: "Background Color", key: "bg", type: "color" },
        ],
    },
    TEST2: {
        name: "Test2 Blueprint",
        template: `<div style="background: {{bg}};"><h1>{{title}}</h1></div>`,
        defaultData: { title: "Test2", bg: "tan" },
        theme: "unum",
        controls: [
            { label: "Heading Text", key: "title", type: "text" },
            { label: "Background Color", key: "bg", type: "color" },
        ],
    },
    HEADER: {
        name: "Simple Header",
        template: `<div style="background: {{bg}};"><h1>{{title}}</h1></div>`,
        defaultData: { title: "New Email", bg: "#ffffff" },
        theme: "unum",
        controls: [
            { label: "Heading Text", key: "title", type: "text" },
            { label: "Background Color", key: "bg", type: "color" },
        ],
    },
    IMAGE_TEXT: {
        name: "Image + Caption",
        template: `<div><img src="{{url}}" /><p>{{caption}}</p></div>`,
        defaultData: { url: "https://placehold.co/600x400", caption: "Edit this text" },
        controls: [
            { label: "Image URL", key: "url", type: "text" },
            { label: "Caption", key: "caption", type: "textarea" },
        ],
    },
};
