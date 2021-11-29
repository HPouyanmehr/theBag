// react
import * as React from 'react';
// next
import Link from 'next/link';
// custom component
import CustomButton from 'components/common/CustomButton';
// type
import { ButtonProps } from '@mui/material';
import { Property } from 'csstype';
interface ButtonLinkProps extends ButtonProps {
  href?: string;
  margin?: Property.Margin;
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const { children, href = '#', margin, ...otherProps } = props;
  return (
    <Link href={href}>
      <a style={{ margin }}>
        <CustomButton disableRipple {...otherProps}>
          {children}
        </CustomButton>
      </a>
    </Link>
  );
};

export default ButtonLink;
