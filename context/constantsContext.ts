// react
import * as React from 'react';
// data
import navLinks from 'constants/navLinks';
import pages from 'constants/pages';
import projectsData, { Project } from 'constants/projectsData';
import blogPosts from 'constants/blogPostsData';
// type
import { NavLink } from 'constants/navLinks';
import { Pages } from 'constants/pages';
import { BlogPost } from 'types/blogPostType';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
  projects?: Project[];
  blogPosts?: BlogPost[];
}

const context: ContextProps = {
  navLinks,
  pages,
  projects: projectsData,
  blogPosts,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
