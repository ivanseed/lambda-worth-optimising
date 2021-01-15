import React from "react";

import Calculator from "./container/Calculator";

import * as Styled from './styles';

function App() {
  return (
    <Styled.Container>
        <Styled.Heading>How much money will you save optimising your Lambda?</Styled.Heading>
        <Calculator />
    </Styled.Container>
  );
}

export default App;
