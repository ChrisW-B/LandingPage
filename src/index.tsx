import * as React from 'react';

import { App } from './components/App';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'emotion';
import { render } from 'react-dom';

if (module.hot && process.env.NODE_ENV !== `production`) {
  module.hot.accept();
}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`;

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);
