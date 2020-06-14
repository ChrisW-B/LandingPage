import styled from 'react-emotion';

export const Grid = styled.div`
  border: 1px solid red;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fill, 25px);
  grid-template-rows: repeat(auto-fill, 25px);
  height: 100vh;
  width: 100vw;
`;

export const GridWrapper = styled.div`
  background-color: black;
`;
