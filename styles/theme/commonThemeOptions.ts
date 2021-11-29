// @mui
import { ThemeOptions } from '@mui/material';

const commonThemeOptions: ThemeOptions = {
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
};

export default commonThemeOptions;
