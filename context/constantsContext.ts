// react
import * as React from 'react';
// data
import navLinks from 'constants/navLinks';
// type
import { NavLink } from 'constants/navLinks';

interface ContextProps {
  navLinks?: NavLink[];
}

const context: ContextProps = {
  navLinks,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
