import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './routes/app.routes'; 
import Global from './styles/global';
import theme from './styles/theme';
import { register } from 'swiper/element/bundle'
import 'swiper/css'; 
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

register();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>
);
