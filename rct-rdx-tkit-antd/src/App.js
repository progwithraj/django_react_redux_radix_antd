import Router from './router'
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from 'react-router-dom'
import TopBar from './components/Topbar';
import { getCurrentTheme } from './utils/theme';
// import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { ThemeContext, useTheme } from 'antd';
import { ConfigProvider } from 'antd';

function App() {
  const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`,
  };
  const theme = getCurrentTheme();

  return (
    <div className="App">
      <NextUIProvider theme={theme}>
        <ConfigProvider theme={theme}>

          <BrowserRouter>
            {/* <ThemeSwitcherProvider themeMap={themes} defaultTheme="light"> */}
            <TopBar />
            <Router />
            {/* </ThemeSwitcherProvider> */}
          </BrowserRouter>
        </ConfigProvider>

      </NextUIProvider>

    </div>
  );
}

export default App;
