import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';

import Global from './styles/global'
import theme from './styles/theme';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <Home/>
    </ThemeProvider>
  </StrictMode>,
)
