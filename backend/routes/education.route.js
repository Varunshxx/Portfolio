import express from 'express';

import { Education } from '../models/portfolio.model.js';

const router = express.Router();

//CREARE
router.post('/', async (req, res) => {
    const { degree, institution, duration, desc } = req.body;
    try {
        const newEducation = new Education({ degree, institution, duration, desc });
        await newEducation.save();
        res.status(201).json(newEducation);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { degree, institution, duration, desc } = req.body;
    try {
        const update = await Education.findByIdAndUpdate(id, {degree, institution, duration, desc}, {new: true});
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json({error: 'Unable to update'})
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const education = await Education.findByIdAndDelete(id);
        if(!education) return res.status(404).json({message: 'Education not found'})
        res.json({message: 'Education removed'})
    } catch (error) {
        res.status(500).json({error: 'Unable to delete'})
    }
})

export default router;
