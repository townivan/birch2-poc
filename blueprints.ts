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
// Note:  Using the Record utility type of TypeScript allows defaultData to be flexible.
//        This way, each blueprint can have its own unique set of data fields without being
//        constrained by a rigid interface.
//
//        Record<K, T> is a Generic type that constructs an object type whose property keys
//        are of type K and property values are of type T.
//
//        In this case, Record<string, any> means that defaultData can have any number of properties
//        with string keys and values of any type. This flexibility is crucial for a blueprint system
//        where different blueprints may require different data structures.
//
//        It's saying that defaultData can be an object with any string keys and values of any type,
//        which allows for maximum flexibility in defining the data needed for each blueprint.
//
//        Reminder: An object looks like this: { key1: value1, key2: value2, ... } where keys are strings
//        and values can be of any type (string, number, boolean, etc.).

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
    defaultData: {
      url: "https://placehold.co/600x400",
      caption: "Edit this text",
    },
    controls: [
      { label: "Image URL", key: "url", type: "text" },
      { label: "Caption", key: "caption", type: "textarea" },
    ],
  },
};
