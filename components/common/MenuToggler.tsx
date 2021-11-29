// react
import * as React from 'react';
// @mui
import { IconButton, IconButtonProps } from '@mui/material';
// @mui/icons-material
import MenuIcon from '@mui/icons-material/Menu';
// type
interface MenuTogglerProps extends IconButtonProps {}

const MenuToggler: React.FunctionComponent<MenuTogglerProps> = (props) => {
  const { color = 'primary', size = 'large', ...otherProps } = props;

  return (
    <IconButton
      aria-label="Menu toggler"
      size={size}
      color={color}
      {...otherProps}
    >
      <MenuIcon fontSize="inherit" color="inherit" />
    </IconButton>
  );
};

export default MenuToggler;
