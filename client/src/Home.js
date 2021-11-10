import React from "react";
import styled from "styled-components";

// Home Splash Component
const Home = () => {
    return <HomeWrap>
        <h2>Please select a tab on the top right menu to get started.</h2>
        <p>May the force be with you on your search.</p>
    </HomeWrap>
};

// Styled Component
const HomeWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 100px;
    background: #333;
    flex: 1;

    & > h2, p {
        color: white;
        margin: 50px 0;
        font-size: 40px;
        transition: 300ms ease-out;
        &:hover {
            color: yellow;
            transition: 200ms ease-in;
        };
    };

    & > p {
        font-size: 30px;
    };
`;

export default Home;