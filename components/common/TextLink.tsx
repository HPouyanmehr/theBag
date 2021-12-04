// react
import * as React from 'react';
// next
import Link from 'next/link';
// type
import { Properties } from 'csstype';
interface TextLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href?: string;
  style?: Properties;
}

const TextLink: React.FunctionComponent<TextLinkProps> = (props) => {
  const {
    children,
    href = '/',
    style = { color: 'inherit' },
    ...otherProps
  } = props;

  let customStyle: Properties = {
    ...style,
    color: style.color ? style.color : 'inherit',
    textDecoration: 'none',
  };

  return (
    <Link href={href}>
      <a style={customStyle} {...otherProps}>
        {children}
      </a>
    </Link>
  );
};

export default TextLink;
