// react
import * as React from 'react';
// @mui
import { styled } from '@mui/material';
// prism-react-renderer
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
// type
interface HighlightSyntaxProps {
  code?: string;
  language?: Language;
}

const Pre = styled('pre')<React.HTMLAttributes<HTMLPreElement>>({
  padding: '1rem',
  borderRadius: '4px',
});

const HighlightSyntax: React.FunctionComponent<HighlightSyntaxProps> = (
  props
) => {
  const {
    code = `const sayHello = (name:string) => console.log(\`Hello\${name}\`);`,
    language = 'tsx',
  } = props;

  return (
    <Highlight {...defaultProps} theme={vsDark} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default HighlightSyntax;
