import { createTheme, responsiveFontSizes } from '@mui/material';

const mainTextColor = '#8e95a5';

const theme = responsiveFontSizes(createTheme({
  palette: {
    background: {
      default: '#1e2129',
    },
    primary: {
      main: '#00acc1',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
    info: {
      main: mainTextColor,
      contrastText: '#fff',
    },
    action: {
      hover: '#000',
    },
    divider: '#8e95a5',
  },
}));

export default theme;
