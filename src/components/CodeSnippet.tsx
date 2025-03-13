import { CopyBlock } from 'react-code-blocks';

export default function CodeSnippet(props: {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
}) {
  const copyBlockProps = {
    text: props.code,
    language: props.language,
    showLineNumbers: props.showLineNumbers,
    startingLineNumber: props.startingLineNumber,
    wrapLines: true,
  };

  return <CopyBlock {...copyBlockProps} />;
}
