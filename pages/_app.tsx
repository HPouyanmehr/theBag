// react
import * as React from 'react';
// @emotion
import { CacheProvider, EmotionCache } from '@emotion/react';
// @mui
import { ThemeProvider, CssBaseline } from '@mui/material';
// context
import ComponentsContext from 'context/componentsContext';
// style
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'styles/globals.css';
import lightTheme from 'styles/theme/lightTheme';
// type
import type { AppProps } from 'next/app';
// utility
import createEmotionCache from 'utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const componentsContext = React.useContext(ComponentsContext);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <ComponentsContext.Provider value={componentsContext}>
          <Component {...pageProps} />
        </ComponentsContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
