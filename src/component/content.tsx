import MDeditor from "@uiw/react-md-editor";
import { useState } from "react";
import "../style/content.scss"

export default function Content() {
  const [content, setContent] = useState("");

  const contentChange = (value: string | undefined) => {
    setContent(value as string);
  };

  return (
    <div className="content-wrapper">
      <MDeditor
        height={"100%"}
        onChange={contentChange}
        value={content}
      ></MDeditor>
    </div>
  );
}
