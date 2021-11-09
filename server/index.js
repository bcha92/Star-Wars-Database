// NodeJS Express Modules
import express from "express";
import cors from "cors";
import morgan from "morgan";
// Local Port to host application || 4000 by default
const PORT = process.env.PORT || 4000;

// Express App
const app = express();
app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.json()); // Important to render JSON body for search module
app.use(morgan("tiny")); // Logger Middleware for http request errors

// Endpoints

// Error Handling
app.get("*", (req, res) => res.status(404).json(
    "Error 404: This is an error. Please check your endpoints."
));

// Ready to Listen on PORT
app.listen(PORT, () => console.log(`Listening for requests on PORT ${PORT}...`));