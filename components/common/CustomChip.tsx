// react
import * as React from 'react';
// @mui
import { Chip, ChipProps, styled } from '@mui/material';
// type
interface CustomChipProps extends ChipProps {}

const ChipRoot = styled(Chip)<ChipProps>(({ theme }) => ({
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

const ClickableChip = styled(Chip)<ChipProps>(({ theme }) => ({
  boxShadow: 'none',
  cursor: 'pointer',
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

const CustomChip: React.FunctionComponent<CustomChipProps> = (props) => {
  let { clickable, label, ...otherProps } = props;

  if (otherProps.onClick) clickable = true;

  if (clickable)
    return <ClickableChip clickable={false} label={label} {...otherProps} />;

  return <ChipRoot clickable={false} label={label} {...otherProps} />;
};

export default CustomChip;
