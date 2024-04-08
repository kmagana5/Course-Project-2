router.delete('/structures/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const structure = await Structure.findById(id);
        if (!structure) {
            return res.status(404).json({ message: 'Structure not found' });
        }
        await structure.remove();
        res.json({ message: 'Structure deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
