// react
import * as React from 'react';
// @mui
import { Button, ButtonProps, styled } from '@mui/material';
// type
interface CustomButtonProps extends ButtonProps {}

const CustomButtonRoot = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  boxShadow: 'none',
  '&: hover': {
    boxShadow: 'none',
    background: 'none',
  },
  '&: active': {
    opacity: 0.5,
    transition: '0.3s ease-in-out',
  },
}));

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return <CustomButtonRoot {...otherProps}>{children}</CustomButtonRoot>;
};

export default CustomButton;
