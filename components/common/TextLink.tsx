// react
import * as React from 'react';
// next
import Link from 'next/link';
// custom component
import CustomAnchor from 'components/common/CustomAnchor';
// type
interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const TextLink: React.FunctionComponent<TextLinkProps> = (props) => {
  const { children, href = '/', ...otherProps } = props;

  return (
    <Link href={href}>
      <CustomAnchor href={href} {...otherProps}>
        {children}
      </CustomAnchor>
    </Link>
  );
};

export default TextLink;
