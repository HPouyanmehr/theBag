// react
import * as React from 'react';
// @mui
import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  styled,
  Toolbar,
} from '@mui/material';
// custom component
import NameLogo from 'components/common/NameLogo';
import ButtonLink from 'components/common/ButtonLink';
import MenuToggler from 'components/common/MenuToggler';
import ConstantsContext from 'context/constantsContext';
// type
interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
  marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
  '& > :not(a:first-of-type)': {
    marginLeft: '0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));
  const containerRef = React.useRef(null);

  return (
    <>
      <CustomAppBarRoot position="absolute">
        <Container>
          <Toolbar>
            <NameLogo name="john doe" color="#383838" bgColor="white" />
            <LinkContainer sx={{ marginLeft: 'auto' }}>
              <LinksBox>
                {navLinks?.map((navLink, index) => (
                  <ButtonLink
                    key={navLink.label + index + navLink.href}
                    href={navLink.href}
                    {...navLink.buttonProps}
                  >
                    {navLink.label}
                  </ButtonLink>
                ))}
              </LinksBox>
              <MenuToggler
                color="info"
                onClick={() => setOpenDropdown(!openDropdown)}
                sx={{ display: { sm: 'none' } }}
              />
            </LinkContainer>
          </Toolbar>
          <Box ref={containerRef}>
            <Slide
              container={containerRef.current}
              direction="down"
              in={openDropdown}
              mountOnEnter
              unmountOnExit
            >
              <List component="div">
                {navLinks?.map((navLink, index) => (
                  <ListItemButton
                    key={navLink.label + index}
                    sx={{
                      '&: hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px',
                      },
                    }}
                  >
                    <ListItemIcon {...navLink.iconProps}>
                      {navLink.Icon}
                    </ListItemIcon>
                    <ListItemText primary={navLink.label} />
                  </ListItemButton>
                ))}
              </List>
            </Slide>
          </Box>
        </Container>
      </CustomAppBarRoot>
    </>
  );
};

export default CustomAppBar;
