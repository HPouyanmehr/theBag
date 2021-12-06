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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'currentcolor',
  },
  '&: active': {
    opacity: 0.5,
    transition: '0.3s ease-in-out',
  },
}));

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <CustomButtonRoot disableRipple {...otherProps}>
      {children}
    </CustomButtonRoot>
  );
};

export default CustomButton;
