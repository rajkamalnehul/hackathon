/** @format */

import React, { Component, useState } from 'react';
import './App.css';
import Routes from './Routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from './Pages/Login.js';

function App() {
  return (
    <div>
      <Routes />
      {/* <Login /> */}
    </div>
  );
}

export default App;
