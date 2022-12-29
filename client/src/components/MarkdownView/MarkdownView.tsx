import styled from "styled-components";
import MarkdownViewer from "react-showdown";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const MarkdownView: React.FC<{ content: string | undefined }> = ({
  content,
}) => {
  return (
    <PostContent>
      <MarkdownViewer
        markdown={content || ""}
        options={{ tables: true, emoji: true }}
        className="toastui-editor-contents"
      />
    </PostContent>
  );
};

export default MarkdownView;

const PostContent = styled.article`
  min-height: 300px;
  padding: 40px 0;
  line-height: 1.7;

  .toastui-editor-contents {
    font-size: ${(props) => props.theme.font.M};
    font-family: "S-CoreDream-3Light";
  }
`;
