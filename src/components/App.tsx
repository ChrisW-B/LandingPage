import * as React from 'react';
import styled from 'react-emotion';
export interface AppProps {}

export const App = (): JSX.Element => (
  <div>
    <Header>Hello World!</Header>
    <Para>idk</Para>
  </div>
);

const Header = styled.h1`
  background: red;
  color: green;
`;

const Para = styled.p`
  background: orange;
`;

export default App;
