// react
import * as React from 'react';
// data
import navLinks from 'constants/navLinks';
import pages from 'constants/pages';
// type
import { NavLink } from 'constants/navLinks';
import { Pages } from 'constants/pages';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
}

const context: ContextProps = {
  navLinks,
  pages,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
