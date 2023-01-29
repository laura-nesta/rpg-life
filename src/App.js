import './App.css';

import React from 'react';

import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { Router } from './routes/router.jsx';

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <div className="App">
        <Router id="root"></Router> 
      </div>
    </ThemeProvider>
  );
}

export default App;