import React, { useState, useEffect } from 'react';
import Router from './router'
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from 'react-router-dom'
import TopBar from './components/Topbar';
import { getCurrentTheme } from './utils/theme';

function App() {
  const theme = getCurrentTheme();

  return (
    <div className="App">
      <NextUIProvider theme={theme}>
        <BrowserRouter>
          <TopBar />
          <Router />
        </BrowserRouter>
      </NextUIProvider>

    </div >
  );
}

export default App;
