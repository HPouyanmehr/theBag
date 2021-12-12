// react
import * as React from 'react';
// @emotion
import { CacheProvider, EmotionCache } from '@emotion/react';
// @mui
import { ThemeProvider, CssBaseline } from '@mui/material';
// context
import ComponentsContext from 'context/componentsContext';
import ConstantsContext from 'context/constantsContext';
// style
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
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
  const constantsContext = React.useContext(ConstantsContext);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <ComponentsContext.Provider value={componentsContext}>
          <ConstantsContext.Provider value={constantsContext}>
            <Component {...pageProps} />
          </ConstantsContext.Provider>
        </ComponentsContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
