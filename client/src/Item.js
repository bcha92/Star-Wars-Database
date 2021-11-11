import React, { useState } from "react";
import styled from "styled-components";
// React Icons for Dropdown State
import { GoTriangleRight, GoTriangleUp } from "react-icons/go"

// Reusable Item Sub-Component for People/Planets/Starships
const Item = ({ id, name,
    // Props for People
    gender, birth, mass, hair, eye, skin,
    // Props for Planets
    population, diameter, terrain, climate,
    gravity, orbit, rotation, water,
    // Props for Starships
    model, classification, manufacturer, cost, length,
    cargo, speed, hyperdrive, consumables,
    crew, passengers, MGLT
}) => {
    // State to Show/Hide more information
    const [details, setDetails] = useState(false);

    return <ItemWrap style={{ borderColor: details ? "yellowgreen" : "inherit" }}>
        <h3 style={{ color: details ? "yellowgreen" : "inherit" }}>{name}</h3>
        {details && <span>
            {id === "people" ? <>
                <p>Gender: {gender}</p>
                <p>Birth Year: {birth}</p>
                <p>Mass: {mass}</p>
                <p>Hair Color: {hair}</p>
                <p>Eye Color: {eye}</p>
                <p>Skin Color: {skin}</p>
            </> :

            id === "planets" ? <>
                <p>Population: {population}</p>
                <p>Diameter: {diameter}</p>
                <p>Terrain: {terrain}</p>
                <p>Climate: {climate}</p>
                <p>Rotation Period: {rotation}</p>
                <p>Orbital Period: {orbit}</p>
                <p>Gravity: {gravity}</p>
                <p>Surface Water: {water}</p>
            </>:
            <>
                <p>Model: {model}</p>
                <p>Starship Class: {classification}</p>
                <p>Manufacturer: {manufacturer}</p>
                <p>Cost in Credits: {cost}</p>
                <p>Length: {length}</p>
                <p>Cargo Capacity: {cargo}</p>
                <p>Max Atmosphering Speed: {speed}</p>
                <p>Hyperdrive Rating: {hyperdrive}</p>
                <p>Consumables: {consumables}</p>
                <p>Crew: {crew}</p>
                <p>Passengers: {passengers}</p>
                <p>MGLT: {MGLT}</p>
            </>}
        </span>}
        {details ? // Dropdown State Change on Click
        <p className="drop" onClick={() => setDetails(!details)}>
            <GoTriangleUp /> Click here to hide details
        </p> :
        <p className="drop" onClick={() => setDetails(!details)}>
            <GoTriangleRight /> Click here to show details
        </p>}
    </ItemWrap>
};

// Item Styling
const ItemWrap = styled.li`
    display: flex;
    flex-flow: column wrap;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;

    & > span {
        margin: 10px 5px 5px;
    };

    & > p {
        &.drop {
            display: flex;
            align-items: center;
            font-size: small;
            margin-top: 5px;
            cursor: pointer;
        };
    };
`;

export default Item;