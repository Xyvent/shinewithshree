import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownBodyProps = {
  content: string;
};

export default function MarkdownBody({ content }: MarkdownBodyProps) {
  return (
    <div className="content-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
