import express from 'express';

import { Projects } from '../models/portfolio.model.js';

const router = express.Router();

//CREARE
router.post('/', async (req, res) => {
    const { image, title, description, url } = req.body;
    try {
        const newProject = new Projects({ image, title, description, url });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { image, title, description,url } = req.body;
    try {
        const update = await Projects.findByIdAndUpdate(id, {image, title, description, url}, {new: true});
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json({error: 'Unable to update'})
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const project = await Projects.findByIdAndDelete(id);
        if(!project) return res.status(404).json({message: 'Project not found'})
        res.json({message: 'Project removed'})
    } catch (error) {
        res.status(500).json({error: 'Unable to delete'})
    }
 
})

export default router;
