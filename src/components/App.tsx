import * as React from 'react';
import styled from 'react-emotion';
export interface AppProps {}

export const App = ({  }: AppProps) => (
  <div>
    <Header>Hello World!</Header>
    <p>Foo to the baz</p>
    <Para>idk</Para>
  </div>
);

const Header = styled.h1`
  color: green;
`;

const Para = styled.p`
  background: orange;
`;

export default App;
