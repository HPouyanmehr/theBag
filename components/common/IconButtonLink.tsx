// react
import * as React from 'react';
// next
import Link from 'next/link';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
import { IconButtonProps } from '@mui/material';
interface IconButtonLinkProps extends IconButtonProps {
  href?: string;
}

const CustomIconButtonWithRef = React.forwardRef<
  IconButtonLinkProps,
  IconButtonLinkProps
>(({ children, color, ...otherProps }, ref) => {
  return (
    <CustomIconButton color={color} {...otherProps}>
      {children}
    </CustomIconButton>
  );
});

CustomIconButtonWithRef.displayName = 'CustomIconButtonWithRef';

const IconButtonLink: React.FunctionComponent<IconButtonLinkProps> = (
  props
) => {
  const { children, href = '#' } = props;

  return (
    <Link href={href} passHref>
      <CustomIconButtonWithRef>{children}</CustomIconButtonWithRef>
    </Link>
  );
};

export default IconButtonLink;
