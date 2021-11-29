// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
      contrastText: '#FF6347',
    },
    info: {
      main: '#505050',
    },
    background: {
      default: 'tomato',
    },
    text: {
      primary: '#383838',
      secondary: '#505050',
    },
  },
  ...commonThemeOptions,
});

export default lightTheme;
