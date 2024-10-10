import express from 'express';

import { Experience } from '../models/portfolio.model.js';

const router = express.Router();

//CREARE
router.post('/', async (req, res) => {
    const { position, company, duration, desc } = req.body;
    try {
        const newExperience = new Experience({ position, company, duration, desc });
        await newExperience.save();
        res.status(201).json(newExperience);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { position, company, duration, desc } = req.body;
    try {
        const update = await Experience.findByIdAndUpdate(id, {position, company, duration, desc}, {new: true});
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json({error: 'Unable to update'})
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const experience = await Experience.findByIdAndDelete(id);
        if(!experience) return res.status(404).json({message: 'Experience not found'})
        res.json({message: 'Experience removed'})
    } catch (error) {
        res.status(500).json({error: 'Unable to delete'})
    }
 
})

export default router;
