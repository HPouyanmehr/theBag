// react
import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// type
export interface IllustratorCCProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const IllustratorCC: React.FunctionComponent<IllustratorCCProps> = (props) => {
  const {
    bgColor = '#300',
    textColor = '#ff9a00',
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
      <path
        d="M16.17,8.67a1,1,0,0,1-.74-.29,1.06,1.06,0,0,1-.29-.77,1,1,0,0,1,.3-.74,1,1,0,0,1,.74-.29,1,1,0,0,1,.76.29,1,1,0,0,1,.28.74,1.06,1.06,0,0,1-.29.77,1,1,0,0,1-.76.29Zm-.94,7.23V9.48a.1.1,0,0,1,.11-.11H17a.1.1,0,0,1,.11.11V15.9c0,.09,0,.13-.11.13H15.36A.12.12,0,0,1,15.23,15.9Z"
        style={{ fill: textColor }}
      />
      <path
        d="M11.67,13.92H8.57l-.64,2a.13.13,0,0,1-.15.11H6.21q-.13,0-.09-.15L8.8,8.12c0-.09,0-.18.08-.28a2.41,2.41,0,0,0,0-.54A.1.1,0,0,1,9,7.21h2.16c.07,0,.1,0,.11.06l3,8.59c0,.09,0,.13-.08.13H12.48a.13.13,0,0,1-.13-.09l-.68-2Zm-2.62-1.7h2.12c-.05-.17-.12-.38-.2-.6s-.15-.46-.22-.71l-.24-.77c-.09-.26-.16-.5-.23-.74s-.12-.45-.18-.65h0A8.58,8.58,0,0,1,9.8,9.83c-.12.4-.25.81-.38,1.23S9.18,11.88,9.05,12.22Z"
        style={{ fill: textColor }}
      />
    </SvgIcon>
  );
};

export default IllustratorCC;
