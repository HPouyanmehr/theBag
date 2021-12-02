// react
import * as React from 'react';
// @mui
import { SvgIcon, SvgIconProps } from '@mui/material';
// type
import { Property } from 'csstype';
interface ArrowDownProps extends SvgIconProps {
  fill?: Property.Fill;
  stroke?: Property.Stroke;
  strokeWidth?: Property.StrokeWidth;
}

const ArrowDown: React.FunctionComponent<ArrowDownProps> = (props) => {
  const {
    fill = 'none',
    stroke = 'inherit',
    strokeWidth = '4px',
    viewBox,
    ...otherProps
  } = props;
  return (
    <SvgIcon viewBox="0 0 32 32" {...otherProps}>
      <path
        d="M28,10.83,18.83,20a4,4,0,0,1-5.66,0L4,10.83"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth,
        }}
      />
    </SvgIcon>
  );
};

export default ArrowDown;
