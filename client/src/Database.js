import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Database Component for People, Planets, Starships (based on id parameter)
const Database = ({ id }) => {
    const [isLoading, setLoading] = useState("idle"); // Loading State
    // Container to store fetched data from backend server
    const [data, setData] = useState(null);

    // UseEffect Callback to render data state from backend to frontend
    useEffect(() => {
        setLoading("loading") // sets loading state
        fetch(`/${id}?page=${2}`) // fetches API endpoint
        .then(res => res.json()) // process to json()
        .then(body => { // body result
            if (body !== null) { // Process if body is not null
                if (body.results.length < 1) {
                    return setLoading("empty") // Loading state for empty array returned
                }
                setLoading("loaded") // Loaded state for results
                return setData(body.results); // Sets state for body results
            }
        })
    }, [id]);

    console.log(isLoading, data);

    return <DatabaseWrap>
        <ListWrap>
            <h2>List of {id.slice(0, 1).toUpperCase() + id.slice(1,)} in the Star Wars Universe</h2>
        </ListWrap>
    </DatabaseWrap>
};

// Styled Components for Database Component
const DatabaseWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

const ListWrap = styled(DatabaseWrap)`
    background: #333;
    color: white;
    align-items: center;
    & > h2 {
        font-size: 30px;
        margin: 10px 0;
        transition: 300ms ease-out;
        cursor: default;
        &:hover {
            color: yellow;
            transition: 200ms ease-in;
        };
    };
`;

export default Database;