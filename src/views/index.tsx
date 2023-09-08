import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import Routes from './screens/routes';

const { darkAlgorithm, defaultAlgorithm } = theme;

export const ThemeContext = createContext({
  darkMode: false,
  handleSetDarkMode: () => {},
});

const viewIndex = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    // <ConfigProvider
    //   theme={{
    //     algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
    //     token: {
    //       colorPrimary: '#159bcc',
    //       colorSuccess: '#10e8ab',
    //       colorWarning: '#ffd175',
    //       colorError: '#f85377',
    //       colorInfo: '#159bcc',
    //       sizeStep: 4,
    //       borderRadius: 6,
    //       wireframe: false,
    //     },
    //   }}
    // >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    // </ConfigProvider>
  );
};

export default viewIndex