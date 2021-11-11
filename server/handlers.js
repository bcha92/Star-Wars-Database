import swapi from "swapi-node"; // Star Wars API

// Get People (10 results per page count)
// or Get Person by string query search
export const getPeople = async (req, res) => {
    const { page=1, search="" } = req.query; // Uses req.query for front-end page # query and name search query by string
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/people?${
            // If search parameter is empty string, defaults to page number
            search.length < 1 ? "page=" + page : "search=" + search
        }`)
    );
};

// Get Planets (10 results per page count)
export const getPlanets = async (req, res) => {
    const { page=1, search="" } = req.query; // Uses req.query for front-end page # query and name search query by string
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/planets?${
            // If search parameter is empty string, defaults to page number
            search.length < 1 ? "page=" + page : "search=" + search
        }`)
    );
};

// Get Starships (10 results per page count)
export const getStarships = async (req, res) => {
    const { page=1, search="" } = req.query; // Uses req.query for front-end page # query and name/model search query by string
    return res.status(200).json(
        await swapi.get(`https://swapi.dev/api/starships?${
            // If search parameter is empty string, defaults to page number
            search.length < 1 ? "page=" + page : "search=" + search
        }`)
    );
};