// react
import * as React from 'react';
// @mui icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
import { IconButtonProps } from '@mui/material';

interface ExpandMoreIconButtonProps extends IconButtonProps {
  open?: boolean;
}

const ExpandMoreIconButton: React.FunctionComponent<ExpandMoreIconButtonProps> =
  (props) => {
    const { color = 'inherit', open = false, ...otherProps } = props;

    return (
      <CustomIconButton color={color} {...otherProps}>
        <ExpandMoreIcon
          color="inherit"
          fontSize="inherit"
          sx={{
            transition: 'transform 0.5s ease-in-out',
            transform: open ? 'rotate(-180deg)' : '',
          }}
        />
      </CustomIconButton>
    );
  };

export default ExpandMoreIconButton;
