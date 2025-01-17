const express= require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger_config");

const PORT = 3003;
const app = express();

const gameRoutes = require("./routes/games_routes");
const platformRoutes = require("./routes/platforms_routes");
const screenshotRoutes = require("./routes/screenshots_routes");
const characterRoutes = require("./routes/characters_routes");
const genreRoutes = require("./routes/genres_routes");
const gamemodeRoutes = require("./routes/game_modes_routes");

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/game_modes", gamemodeRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Try going to http://localhost:${PORT}/api/games`);
    console.log(`Try going to http://localhost:${PORT}/api/platforms`);
    console.log(`Try going to http://localhost:${PORT}/api/screenshots`);
    console.log(`Try going to http://localhost:${PORT}/api/characters`);
    console.log(`Try going to http://localhost:${PORT}/api/genres`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});