import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

if (module.hot && process.env.NODE_ENV !== `production`) {
  module.hot.accept();
}

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);
