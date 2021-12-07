// react
import * as React from 'react';
// @mui
import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Container,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  const [dropdownState, setDropdownState] = React.useState(false);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

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
                onClick={() => setDropdownState(!dropdownState)}
                open={dropdownState}
                sx={{ display: { sm: 'none' } }}
              />
            </LinkContainer>
          </Toolbar>
          <Box>
            <List component="div">
              {navLinks?.map((navLink, index) => (
                <Grow
                  in={dropdownState}
                  style={{ transformOrigin: 'center left' }}
                  {...(dropdownState ? { timeout: index * 300 } : {})}
                >
                  <ListItemButton
                    key={navLink.label + index}
                    sx={{
                      borderRadius: '4px',
                      '&: hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: 'inherit',
                        fontSize: 'large',
                        minWidth: '2rem',
                      }}
                    >
                      {navLink.Icon}
                    </ListItemIcon>
                    <ListItemText primary={navLink.label} />
                  </ListItemButton>
                </Grow>
              ))}
            </List>
          </Box>
        </Container>
      </CustomAppBarRoot>
    </>
  );
};

export default CustomAppBar;
