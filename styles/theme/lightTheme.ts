// @mui
import { createTheme } from '@mui/material/styles';

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
});

export default lightTheme;
