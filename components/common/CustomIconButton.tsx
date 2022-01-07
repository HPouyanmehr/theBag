// react
import * as React from 'react';
// @mui
import { IconButton, IconButtonProps, styled } from '@mui/material';
// type
interface CustomIconButtonProps extends IconButtonProps {}

const CustomIconButtonRoot = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    ': active': {
      opacity: 0.5,
      transition: '0.3s ease-in-out',
    },
    ':hover': {
      backgroundColor: 'rgba(127, 127, 127, 0.1)',
    },
  })
);

const CustomIconButton: React.FunctionComponent<CustomIconButtonProps> = (
  props
) => {
  const { children, color = 'inherit', disableRipple, ...otherProps } = props;

  return (
    <CustomIconButtonRoot color={color} disableRipple {...otherProps}>
      {children}
    </CustomIconButtonRoot>
  );
};

export default CustomIconButton;
