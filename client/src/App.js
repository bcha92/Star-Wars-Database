import React from "react";
// NEW UPDATE to REACT-ROUTER-DOM to VERSION 6 (see package.json!!!)
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import styled from "styled-components";

// GlobalStyles (CSS3) via styled-components
import GlobalStyles from "./GlobalStyles";

// Child Components
import Home from "./Home";

// Main App Component
const App = () => {
  return <Wrapper>
    <GlobalStyles />
    <BrowserRouter>
      <Header>
        <Link to="/">
          <h1>Star Wars Information Database</h1>
        </Link>
        <div>
          <NavLink
            to="/people"
            className={({isActive}) => isActive ? "selected" : ""}
          >People</NavLink>
          <NavLink
            to="/planets"
            className={({isActive}) => isActive ? "selected" : ""}
          >Planets</NavLink>
          <NavLink
            to="/starships"
            className={({isActive}) => isActive ? "selected" : ""}
          >Starships</NavLink>
        </div>
      </Header>

      {/* NEW Update from Switch/Route in react-router-dom v5 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={"People"} />
        <Route path="/planets" element={"Planets"} />
        <Route path="/starships" element={"Starships"} />
      </Routes>
    </BrowserRouter>
  </Wrapper>
};

// Styled Components
const Wrapper = styled.div` // Main Wrapper
  display: flex;
  flex-flow: column wrap;
`;

const Header = styled(Wrapper)` // Header Menu
  padding: 20px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #111;

  & > a { // Link
    text-decoration: none;
    color: white;
  };

  & > div { // NavLink Menu
    display: flex;
    justify-content: flex-end;
    flex: 1;

    & > a { // NavLink
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 20px;
      margin: 0 25px;
      transition: 300ms ease-out;

      &:hover {
        color: yellow;
        transition: 200ms ease-in;
      };

      &.selected {
        border-bottom: 3px solid yellow;
        transition: 300ms ease-in;
        color: yellow;
      };
    };
  };
`;

export default App;