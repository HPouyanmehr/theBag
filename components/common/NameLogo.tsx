// react
import * as React from 'react';
// csstype
import { Property } from 'csstype';
// type
interface NameLogoProps {
  bgBorder?: Property.BorderRadius;
  bgColor?: Property.BackgroundColor;
  color?: Property.Color;
  fontSize?: Property.FontSize;
  name?: string;
}

const NameLogo: React.FunctionComponent<NameLogoProps> = (props) => {
  const {
    bgBorder = 4,
    bgColor = 'wheat',
    color = 'inherit',
    fontSize = 'inherit',
    name = 'Name',
  } = props;
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        width: 'fit-content',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          backgroundColor: bgColor,
          borderRadius: bgBorder,
          display: 'flex',
          height: 30,
          width: 30,
        }}
      />
      <p
        style={{
          color,
          fontSize,
          fontWeight: 'bold',
          left: 10,
          position: 'absolute',
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default NameLogo;
