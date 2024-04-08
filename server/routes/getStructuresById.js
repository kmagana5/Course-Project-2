const express = require('express');
const router = express.Router();
const Structure = require('../models/structureModel'); 
router.get('/structures/:structure_id', async (req, res) => {
    const { structure_id } = req.params.structure_id;
    try {
        const structure = await Structure.findById(structure_id); 
        if (!structure) {
            return res.status(404).json({ message: 'Structure not found' });
        }
        res.json(structure);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
