// react
import * as React from 'react';
// next
import Link from 'next/link';
// @mui
import { Button, ButtonProps, styled } from '@mui/material';
// type
import { Property } from 'csstype';
interface ButtonLinkProps extends ButtonProps {
  href?: string;
  margin?: Property.Margin;
}

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  boxShadow: 'none',
  '&: hover': {
    boxShadow: 'none',
  },
}));

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const { children, href = '#', margin, ...otherProps } = props;
  return (
    <Link href={href}>
      <a style={{ margin }}>
        <CustomButton {...otherProps}>{children}</CustomButton>
      </a>
    </Link>
  );
};

export default ButtonLink;
