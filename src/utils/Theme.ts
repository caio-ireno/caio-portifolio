import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#b39ddb',
      main: '#4527a0',
      dark: '#000070',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
  },
});

export default theme