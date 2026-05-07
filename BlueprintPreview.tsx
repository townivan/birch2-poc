interface BlueprintPreviewProps {
  html: string;
}

const BlueprintPreview = ({ html }: BlueprintPreviewProps) => {
  return (
    <iframe
      title="Blueprint Preview"
      srcDoc={html}
      tabIndex={-1}
      style={{ width: "100%", height: "100px", border: "1px solid #ccc" }}
    />
  );
};
export default BlueprintPreview;
