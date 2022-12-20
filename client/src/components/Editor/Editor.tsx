import React, { LegacyRef, useRef } from "react";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import styled from "styled-components";

interface EditorProps {
  placeholder?: string;
  initialValue?: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({
  placeholder,
  initialValue,
  setContent,
}) => {
  const contentRef: LegacyRef<ToastEditor> = useRef(null);

  const getValue = () => {
    const data = contentRef.current?.getInstance();
    const html = contentRef.current?.getInstance().getHTML(); // 작성한 내용을 가져옴
    //console.log(data); // editor의 속성을 모두 가져옴
    html && setContent(html);
  };

  return (
    <Container>
      <ToastEditor
        ref={contentRef}
        onChange={getValue}
        placeholder={placeholder || "내용을 작성해주세요."}
        initialValue={initialValue || " "}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        language="ko-KR"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["ul", "ol", "task"],
          ["link"],
        ]}
      />
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  margin: 10px 0;
`;
