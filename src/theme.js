import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for CRSC frontend
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0033a0'
    },
    secondary: {
      main: '#ff0000',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    }
  }
});

export default theme;