import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({ direction: "rtl" });

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
