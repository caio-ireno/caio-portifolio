import { createTheme } from '@mui/material'
import { blue, orange } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#16161a',
      dark: '#242629',
      light: blue[400],
      contrastText: '#94a1b2',
    },
    secondary: {
      main: "#fff",
      dark: orange[600],
      light: orange[300],
      contrastText: '#fff',

    },
    background: {
      default: '#16161a',
      paper: '#16161a'
    },
  },
  typography: {
    allVariants: {
      color: 'white',
      fontFamily: 'Poppins',
    },
  },
})
