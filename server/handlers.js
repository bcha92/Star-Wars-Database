import swapi from "swapi-node"; // Star Wars API

// Get People (10 results per page count)
export const getPeople = async (req, res) => {
    const { page=1 } = req.query; // Uses req.query for front-end page # query
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/people?page=${page}`)
    );
};

export const getPerson = async (req, res) => {
    const { name="" } = req.query; // Uses req.query for front-end name search query by string
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/people?search=${name}`)
    );
};

// Get Planets (10 results per page count)
export const getPlanets = async (req, res) => {
    const { page=1 } = req.query; // Uses req.query for front-end page # query
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/planets/?page=${page}`)
    );
};

// Get Starships (10 results per page count)
export const getStarships = async (req, res) => {
    const { page=1 } = req.query; // Uses req.query for front-end page # query
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/starships/?page=${page}`)
    );
};