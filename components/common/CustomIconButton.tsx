// react
import * as React from 'react';
// @mui
import { IconButton, IconButtonProps, styled } from '@mui/material';
// type
interface CustomIconButtonProps extends IconButtonProps {}

const CustomIconButtonRoot = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    div: {
      '&: active': {
        opacity: 0.5,
        transition: '0.3s ease-in-out',
      },
      '&: hover': {
        opacity: 0.5,
        transition: '0.3s ease-in-out',
      },
    },
  })
);

const CustomIconButton: React.FunctionComponent<CustomIconButtonProps> = (
  props
) => {
  const { children, disableRipple, ...otherProps } = props;

  return (
    <CustomIconButtonRoot disableRipple {...otherProps}>
      <div>{children}</div>
    </CustomIconButtonRoot>
  );
};

export default CustomIconButton;
