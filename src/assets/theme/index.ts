import { createMuiTheme } from '@material-ui/core/styles';
// import '@material-ui/lab/themeAugmentation';
import {grey, green, deepOrange} from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500]
    },
    secondary: {
      main: green[600]
    },
    background: {
      default: grey[100]
    }
  }
})

// const theme = createMuiTheme({
//   overrides: {
//     MuiTimeline: {
//       root: {
//         backgroundColor: 'red',
//       },
//     },
//   },
// });