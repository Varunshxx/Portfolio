import express from 'express';

import { Skills } from '../models/portfolio.model.js';

const router = express.Router();

//CREARE
router.post('/', async (req, res) => {
    const { frontend, backend, others } = req.body;
    try {
        const newskill = new Skills({ frontend, backend, others });
        await newskill.save();
        res.status(201).json(newskill);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const skills = await Skills.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { frontend, backend, other } = req.body;
    try {
        const update = await Skills.findByIdAndUpdate(id, {frontend, backend, other}, {new: true});
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json({error: 'Unable to update'})
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const skill = await Projects.findByIdAndDelete(id);
        if(!skill) return res.status(404).json({message: 'skill not found'})
        res.json({message: 'skill removed'})
    } catch (error) {
        res.status(500).json({error: 'Unable to delete'})
    }
 
})

export default router;
