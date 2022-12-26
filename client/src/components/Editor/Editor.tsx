import React from "react";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import styled from "styled-components";

interface EditorProps {
  placeholder?: string;
  initialValue?: string;
  contentRef?: React.RefObject<ToastEditor>;
  setContent?: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({
  placeholder,
  initialValue,
  contentRef,
  setContent,
}) => {
  return (
    <Container>
      <ToastEditor
        ref={contentRef}
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
