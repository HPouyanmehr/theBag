// react
import * as React from 'react';
// @mui
import { IconButtonProps } from '@mui/material';
// @mui/icons-material
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
interface MenuTogglerProps extends IconButtonProps {
  open?: boolean;
}

const MenuToggler: React.FunctionComponent<MenuTogglerProps> = (props) => {
  const {
    color = 'primary',
    open = false,
    size = 'large',
    ...otherProps
  } = props;

  return (
    <CustomIconButton
      aria-label="Menu toggler"
      size={size}
      color={color}
      {...otherProps}
    >
      {open ? (
        <CloseIcon fontSize="inherit" color="inherit" />
      ) : (
        <MenuIcon fontSize="inherit" color="inherit" />
      )}
    </CustomIconButton>
  );
};

export default MenuToggler;
