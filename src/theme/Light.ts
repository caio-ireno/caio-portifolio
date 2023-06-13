import { createTheme } from '@mui/material'
import { blue, orange } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#E5E7E9",
      light: blue[400],
      contrastText: '#16161a',
    },
    secondary: {
      main: '#16161a',
      dark: orange[600],
      light: orange[300],
      contrastText: '#16161a',
    },
    background: {
      default: '#fff',
      paper: '#16161a'
    },
  },
  typography: {
    allVariants: {
      color: 'black',
      fontFamily: 'Poppins',
    },
  },
})
