import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

// GlobalStyles (CSS3) via styled-components
import GlobalStyles from "./GlobalStyles";

// Main App Component
const App = () => {
  return <Wrapper>
    <GlobalStyles />
    Hello World
  </Wrapper>
};

// Styled Component
const Wrapper = styled.div`
`;

export default App;