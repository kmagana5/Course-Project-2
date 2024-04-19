const Structure = require('../models/structureModel');

const  getAllStructures = async (req, res) => {
    try{
        let structures = await Structure.find({});

        res.json(structures);
        }catch(error){
            console.error(error);
            res.status(500).json({message: 'Server error'});
        }
};

const getStructureById = async (req, res) => {
    try{
        console.log(req.params);
        let structure = await Structure.findOne({ structure_id: req.params.id });

        res.json(structure);
        }catch(error){
            console.error(error);
            res.status(500).json({message: 'Server error'});
        }
};
const getStructuresByTags = async (req, res) => {
    try {
        // Query structures where at least one tag matches
        const structures = await Structure.find({ tags: {$in: req.params.tags} });

        res.json(structures);
    } catch (error) {
        console.log("BIG ERROR:...", error);
    }
};
module.exports = {
    getAllStructures,
    getStructureById,
    getStructuresByTags
};
