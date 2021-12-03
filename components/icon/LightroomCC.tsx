// react
import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// type
export interface LightroomCCProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const LightroomCC: React.FunctionComponent<LightroomCCProps> = (props) => {
  const {
    bgColor = '#001e36',
    textColor = '#31a8ff',
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
      <path
        d="M5.54,2.25H18.46A3.53,3.53,0,0,1,22,5.79V18.21a3.53,3.53,0,0,1-3.54,3.54H5.54A3.53,3.53,0,0,1,2,18.21V5.79A3.53,3.53,0,0,1,5.54,2.25Z"
        style={{ fill: bgColor }}
      />
      <g id="Lr">
        <path
          d="M12.5,16H7.22c-.1,0-.13,0-.13-.15V7.37a.1.1,0,0,1,.09-.12H8.84a.07.07,0,0,1,.09.07v7h3.86q.12,0,.09.12l-.24,1.45a.12.12,0,0,1-.05.1Z"
          style={{ fill: textColor }}
        />
        <path
          d="M13.83,9.36h1.46a.17.17,0,0,1,.17.14.54.54,0,0,1,.07.19,2.34,2.34,0,0,1,0,.26,2.64,2.64,0,0,1,0,.29,3.24,3.24,0,0,1,.89-.71,2.45,2.45,0,0,1,1.24-.3.09.09,0,0,1,.11.09V11c0,.07,0,.09-.13.09a3.51,3.51,0,0,0-1.57.28,1.44,1.44,0,0,0-.46.31v4.25c0,.09,0,.12-.11.12H13.94a.11.11,0,0,1-.13-.1V11.29c0-.2,0-.41,0-.62s0-.44,0-.65,0-.37,0-.56a.09.09,0,0,1,0-.09Z"
          style={{ fill: textColor }}
        />
      </g>
    </SvgIcon>
  );
};

export default LightroomCC;
