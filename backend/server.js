import express from "express";
import dotenv  from "dotenv";
import { connectDB } from "./db/connectDB.js";
import getData from "./routes/getAllData.route.js";
import projectsRoute from "./routes/project.route.js";
import educationRoute from "./routes/education.route.js";
import skillsRoute from "./routes/skills.route.js";
import experienceRoute from "./routes/experience.route.js";
import linksRoute from "./routes/links.route.js";

dotenv.config();
const app = express();

app.use(express.json());

// app.use('/api/projects', projectsRoute);
// app.use('/api/education', educationRoute);
// app.use('/api/skills', skillsRoute);
app.use('/api/links', linksRoute);
// app.use('/api/experience', experienceRoute);
app.use('/api/portfolio', getData);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});