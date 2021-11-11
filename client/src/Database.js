import React, { useEffect, useState } from "react";
import styled from "styled-components";
// React Icons
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Child Component
import Search from "./Search"; // Search Tab
import Item from "./Item"; // List item sub-component

// Database Component for People, Planets, Starships (based on id parameter)
const Database = ({ id }) => {
    const [isLoading, setLoading] = useState("idle"); // Loading State
    const [page, setPage] = useState(1); // Page # State for API
    // Container to store fetched data from backend server
    const [data, setData] = useState(null);

    // Disable/Enable Previous/Next Page buttons while using search tab.
    const [showButtons, setButtons] = useState(true);
    
    // Search Bar Results Function
    const getResults = (query) => {
        setLoading("loading");
        query.length < 1 ?
        setButtons(true) : setButtons(false);

        fetch(`/${id}?${query.length < 1 ?
            "page=1" :
            "search=" + query
        }`)
        .then(res => res.json())
        .then(body => {
            if (body !== null) {
                if (body.results.length < 1) {
                    return setLoading("empty")
                }
                setLoading("loaded");
                return setData(body);
            }
        });
    };

    // UseEffect Callback to render data state from backend to frontend
    useEffect(() => {
        setLoading("loading") // sets loading state
        fetch(`/${id}?page=${page}`) // fetches API endpoint
        .then(res => res.json()) // process to json()
        .then(body => { // body result
            if (body !== null) { // Process if body is not null
                if (body.results.length < 1) {
                    return setLoading("empty") // Loading state for empty array returned
                }
                setLoading("loaded"); // Loaded state for results
                return setData(body); // Sets state for body results
            }
        })
    }, [id, page]);

    return <DatabaseWrap>
        {/* Search Bar Component */}
        <Search getResults={getResults} id={id} />

        <ListWrap /* Database Items List Renderer from Fetch */>
            <h2>List of { // Title of Database Page using "id"
                id.slice(0, 1).toUpperCase() + id.slice(1,)
            } in the Star Wars Universe</h2>

            <ul>{isLoading === "loaded" ? // Show results if items are loaded
            data !== null && data.results.map((item, index) =>
                id === "people" ? // Item Component for People
                    <Item
                        key={index}
                        id={id}
                        name={item.name}
                        gender={item.gender}
                        birth={item.birth_year}
                        mass={item.mass}
                        hair={item.hair_color}
                        eye={item.eye_color}
                        skin={item.skin_color}
                    /> :

                id === "planets" ? // Item Component for Planets
                    <Item
                        key={index}
                        id={id}
                        name={item.name}
                        population={item.population}
                        diameter={item.diameter}
                        terrain={item.terrain}
                        climate={item.climate}
                        gravity={item.gravity}
                        orbit={item.orbital_period}
                        rotation={item.rotation_period}
                        water={item.surface_water}
                    /> :

                    <Item // Item Component for Starships
                        key={index}
                        id={id}
                        name={item.name}
                        model={item.model}
                        classification={item.starship_class}
                        manufacturer={item.manufacturer}
                        cost={item.cost_in_credits}
                        length={item.length}
                        cargo={item.cargo_capacity}
                        speed={item.max_atmosphering_speed}
                        hyperdrive={item.hyperdrive_rating}
                        consumables={item.consumables}
                        crew={item.crew}
                        passengers={item.passengers}
                        MGLT={item.MGLT}
                    />
            ) :

            isLoading === "loading" ? // Loading State
            <h3>Loading Database...</h3> :
            <h3>There are no matches based on your query</h3>
            }</ul>
        </ListWrap>

        {data !== null && showButtons && <Footer /* Previous/Next Page Buttons */>
            <button // Previous Page
                disabled={data.previous === null ? true : false}
                onClick={() => setPage(page - 1)}
            >
                <GoArrowLeft /> Previous Page
            </button>
            <button // Next Page
                disabled={data.next === null ? true : false}
                onClick={() => setPage(page + 1)}
            >
                Next Page <GoArrowRight />
            </button>
        </Footer>}
    </DatabaseWrap>
};

// Styled Components for Database Component
const DatabaseWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex: 1;
    background: #333;
`;

const ListWrap = styled(DatabaseWrap)`
    color: white;
    align-items: center;
    padding: 20px 50px;

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

    & > ul {
        list-style-type: none;
        margin-top: 20px;
        width: 100%;
        & > h3 {font-size: 26px};
    };
`;

const Footer = styled(DatabaseWrap)`
    flex-flow: row nowrap;
    justify-content: space-evenly;
    padding: 10px 0;
    & > button {
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid white;
        background: none;
        color: white;
        cursor: pointer;
        transition: 300ms ease-in-out;

        &:hover {
            border-color: yellow;
            color: yellow;
            transition: 200ms ease-in;
        };

        &:disabled {
            color: gray;
            border-color: gray;
            cursor: default;
        };
    };
`;

export default Database;