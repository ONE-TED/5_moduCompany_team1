import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mixin from './Styles/mixin';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'Styles/GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
