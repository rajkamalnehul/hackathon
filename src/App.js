/** @format */

import React, { Component, useState } from 'react';
import './App.css';
import Routes from './Routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CheckoutSummary from './Pages/CheckoutSummary';

function App() {
  return (
    <div>
      {/* <Routes /> */}
      <CheckoutSummary />
    </div>
  );
}

export default App;
