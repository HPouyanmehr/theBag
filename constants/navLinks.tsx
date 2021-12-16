// react
import React from 'react';
// mui icons
import ConstructionIcon from '@mui/icons-material/Construction';
import InfoIcon from '@mui/icons-material/Info';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
// type
import { ButtonProps, IconProps } from '@mui/material';
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  Icon: React.ReactNode;
  label: string;
  order: number;
  sidebarOrder?: number;
  sidebarVisible?: boolean;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: 'info' },
    href: '/#about',
    Icon: <InfoIcon color="inherit" fontSize="inherit" />,
    label: 'About',
    order: 1,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: 'info' },
    href: '/#skills',
    Icon: <ConstructionIcon color="inherit" fontSize="inherit" />,
    label: 'Skills',
    order: 2,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: 'info' },
    href: '/blog',
    Icon: <TextSnippetIcon color="inherit" fontSize="inherit" />,
    label: 'Blog',
    order: 3,
    sidebarOrder: 2,
    sidebarVisible: true,
  },
  {
    buttonProps: { color: 'info', variant: 'contained' },
    href: '/projects',
    Icon: <WorkspacesIcon color="inherit" fontSize="inherit" />,
    label: 'My Projects',
    order: 5,
    sidebarOrder: 1,
    sidebarVisible: true,
  },
  {
    buttonProps: { color: 'info', variant: 'outlined' },
    href: '/hire-me',
    Icon: <WorkIcon color="inherit" fontSize="inherit" />,
    label: 'Hire Me',
    order: 4,
    sidebarOrder: 3,
    sidebarVisible: true,
  },
];

export default navLinks;
