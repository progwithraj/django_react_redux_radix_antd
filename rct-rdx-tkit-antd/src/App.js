import Router from './router'
import React, { useState, useEffect } from 'react';

import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from 'react-router-dom'
import TopBar from './components/Topbar';
import { getCurrentTheme } from './utils/theme';
// import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { ThemeContext, useTheme } from 'antd';
import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';

function App() {
  const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`,
  };
  const theme = getCurrentTheme();
  // const colorToken = generateColorToken(theme);
  const [primary, setPrimary] = useState('#1677ff');

  return (
    <div className="App">
      <NextUIProvider theme={theme}>
        <ColorPicker showText value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} />
        <ConfigProvider theme={{
          token: {
            colorPrimary: primary,
          }
        }
        } >

          <BrowserRouter>
            {/* <ThemeSwitcherProvider themeMap={themes} defaultTheme="light"> */}
            <TopBar />
            <Router />
            {/* </ThemeSwitcherProvider> */}
          </BrowserRouter>
        </ConfigProvider>

      </NextUIProvider>

    </div >
  );
}

export default App;
