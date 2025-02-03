const express= require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger_config");
const path = require("path");

const settings = require("./config/setings");
const app = express();

const gameRoutes = require("./routes/api/games_routes");
const platformRoutes = require("./routes/api/platforms_routes");
const screenshotRoutes = require("./routes/api/screenshots_routes");
const characterRoutes = require("./routes/api/characters_routes");
const genreRoutes = require("./routes/api/genres_routes");
const gamemodeRoutes = require("./routes/api/game_modes_routes");
const websiteRoutes = require("./routes/api/websites_routes");
const coverRoutes = require("./routes/api/covers_routes");
const similarRoutes = require("./routes/api/similar_routes");

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/game_modes", gamemodeRoutes);
app.use("/api/websites", websiteRoutes);
app.use("/api/covers", coverRoutes);
app.use("/api/similar", similarRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const homeRoute = require("./routes/views/webpage_routese");
app.use("/", homeRoute);
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(settings.PORT, () => {
    console.log(`Try going to ${settings.ROOT}:${settings.PORT}/api/games`);
    console.log(`Swagger docs available at ${settings.ROOT}:${settings.PORT}/api-docs`);
});