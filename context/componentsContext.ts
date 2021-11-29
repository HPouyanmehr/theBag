// react
import * as React from 'react';
// type
import { Breakpoint } from '@mui/material';

interface ContextProps {
  containerMaxWidth?: Breakpoint | false;
}

const context: ContextProps = {
  containerMaxWidth: 'lg',
};

const ComponentsContext = React.createContext(context);

export default ComponentsContext;
