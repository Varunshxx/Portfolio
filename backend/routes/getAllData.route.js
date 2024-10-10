import express from 'express';
import { Experience, Education, Skills, Projects, Links} from '../models/portfolio.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const experience = await Experience.find();
        const education = await Education.find();
        const skills = await Skills.find();
        const projects = await Projects.find();
        const links = await Links.find();

        res.status(200).send({
            experience, 
            education, 
            skills, 
            projects, 
            links,
         });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;