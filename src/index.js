import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
