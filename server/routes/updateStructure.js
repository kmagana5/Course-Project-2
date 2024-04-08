router.put('/structures/:id', async (req, res) => {
    const { id } = req.params;
    const { structure_type, user_id, tags, image_urls, price, structure_name } = req.body;
    try {
        let structure = await Structure.findById(id);
        if (!structure) {
            return res.status(404).json({ message: 'Structure not found' });
        }
        structure.structure_type = structure_type;
        structure.user_id = user_id;
        structure.tags = tags;
        structure.image_urls = image_urls;
        structure.price = price;
        structure.structure_name = structure_name;
        const updatedStructure = await structure.save();
        res.json(updatedStructure);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
