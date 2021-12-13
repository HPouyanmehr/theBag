// react
import * as React from 'react';
// markdown-to-jsx
import MTJMarkdown from 'markdown-to-jsx';
// type
interface MarkdownProps {
  content?: string;
}

const Markdown: React.FunctionComponent<MarkdownProps> = (props) => {
  const { content = '**No Content**' } = props;

  return <MTJMarkdown children={content} />;
};

export default Markdown;
