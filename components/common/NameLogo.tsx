// react
import * as React from 'react';
// type
interface NameLogoProps {
  name?: string;
  bgColor?: string;
}

const NameLogo: React.FunctionComponent<NameLogoProps> = (props) => {
  const { name = 'Name' } = props;
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'wheat',
          borderRadius: 4,
          display: 'flex',
          height: 30,
          width: 30,
        }}
      >
        <p
          style={{
            color: 'inherit',
            fontSize: 18,
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
    </div>
  );
};

export default NameLogo;
