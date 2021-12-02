// react
import * as React from 'react';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// type
export interface SvgIconRootProps extends SvgIconProps {}

const SvgIconRoot: React.FunctionComponent<SvgIconRootProps> = (props) => {
  const {
    viewBox = '0 0 24 24',
    focusable = false,
    'aria-hidden': ariaHidden = true,
    ...otherProps
  } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      focusable={focusable}
      aria-hidden={ariaHidden}
      {...otherProps}
    >
      <path d="M1.42,0,3.34,21.6,12,24l8.66-2.4L22.58,0ZM18.56,5.13l-.12,1.34-.05.59H8.25l.24,2.72h9.66l-.07.71-.62,7,0,.45L12,19.41h0L6.56,17.91l-.37-4.16H8.85L9,15.86l3,.8,2.95-.8.31-3.43H6.07l-.65-7.3-.06-.71H18.63Z" />
    </SvgIcon>
  );
};

export default SvgIconRoot;
