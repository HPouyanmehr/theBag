// react
import * as React from 'react';
// next
import Link from 'next/link';
// custom component
import CustomButton from 'components/common/CustomButton';
// type
import { ButtonProps } from '@mui/material';
interface ButtonLinkProps extends ButtonProps {
  href?: string;
}

const CustomButtonWithRef = React.forwardRef<ButtonLinkProps, ButtonLinkProps>(
  ({ children, ...otherProps }, ref) => (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
);

CustomButtonWithRef.displayName = 'CustomButtonWithRef';

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const { children, href = '#', ref, ...otherProps } = props;

  return (
    <Link href={href} passHref>
      <CustomButtonWithRef {...otherProps}>{children}</CustomButtonWithRef>
    </Link>
  );
};

export default ButtonLink;
