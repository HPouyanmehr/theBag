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

const IconButtonLink: React.FunctionComponent<IconButtonLinkProps> = (
  props
) => {
  const { children, href = '#', ...otherProps } = props;

  const CustomIconButtonWithRef = React.forwardRef<
    IconButtonLinkProps,
    IconButtonLinkProps
  >(({ color, ...otherProps }, ref) => {
    return (
      <CustomIconButton color={color} {...otherProps}>
        {children}
      </CustomIconButton>
    );
  });

  return (
    <Link href={href} passHref>
      <CustomIconButtonWithRef>{children}</CustomIconButtonWithRef>
    </Link>
  );
};

export default IconButtonLink;
