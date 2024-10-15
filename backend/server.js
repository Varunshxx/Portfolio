import express from "express";
import dotenv  from "dotenv";
import { connectDB } from "./db/connectDB.js";
import getData from "./routes/getAllData.route.js";
import projectsRoute from "./routes/project.route.js";
import educationRoute from "./routes/education.route.js";
import skillsRoute from "./routes/skills.route.js";
import experienceRoute from "./routes/experience.route.js";
import linksRoute from "./routes/links.route.js";
import path from 'path';


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json());

// app.use('/api/projects', projectsRoute);
// app.use('/api/education', educationRoute);
// app.use('/api/skills', skillsRoute);
app.use('/api/links', linksRoute);
// app.use('/api/experience', experienceRoute);
app.use('/api/portfolio', getData);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'html.html'));
})


app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});