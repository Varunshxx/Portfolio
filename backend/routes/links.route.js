import express from 'express';

import { Links } from '../models/portfolio.model.js';

const router = express.Router();

//CREARE
router.post('/', async (req, res) => {
    const { email, twitter, github, linkedin, resume } = req.body;
    try {
        const newLink = new Links({ email, twitter, github, linkedin, resume });
        await newLink.save();
        res.status(201).json(newLink);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const links = await Links.find();
        res.json(links);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const { email, twitter, github, linkedin, resume } = req.body;
    try {
        const update = await Links.findByIdAndUpdate(id, {email, twitter, github, linkedin, resume}, {new: true});
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json({error: 'Unable to update'})
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const links = await Links.findByIdAndDelete(id);
        if(!links) return res.status(404).json({message: 'Links not found'})
        res.json({message: 'Links removed'})
    } catch (error) {
        res.status(500).json({error: 'Unable to delete'})
    }
})

export default router;
