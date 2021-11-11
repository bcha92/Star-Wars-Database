import React, { useState } from "react";
import styled from "styled-components";

// Search Bar Component
const Search = ({ getResults, id }) => {
    // Search Bar Query
    const [search, setSearch] = useState("");

    return <SearchForm onSubmit={(e) => {
        e.preventDefault(); // Prevents page from refreshing
        getResults(search);
    }}>
        <input // Search Input
            className="search"
            placeholder={`Search for ${id} by ${
                id === "starships" ? "name / model" : "name"
            }`}
            // Search Query based on Value
            onChange={(e) => setSearch(e.target.value)}
        ></input>
        <input // Submit Button
            type="submit"
            className="submit"
        ></input>
    </SearchForm>
};

// Styled Component
const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    color: white;

    & > input {
        padding: 10px;
        margin: 0 5px;
        font-size: 24px;

        &.search {
            flex: 1;
            max-width: 500px;
            border-radius: 10px;
        };

        &.submit {
            cursor: pointer;
            border: 2px solid white;
            border-radius: 10px;
            background: none;
            color: white;
            transition: 300ms ease-in-out;
            &:hover {
                border-color: yellow;
                color: yellow;
                transform: scale(105%);
                transition: 200ms ease-in;
            };
        };
    };
`;

export default Search;