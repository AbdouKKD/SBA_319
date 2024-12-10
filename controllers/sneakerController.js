const Sneaker = require('../models/Sneaker'); 

// Get sneakers
const getSneakers = async (req, res) => {
  try {
    const sneakers = await Sneaker.find();
    res.status(200).json(sneakers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sneakers', error });
  }
};

// Create new sneaker
const createSneaker = async (req, res) => {
  try {
    const sneaker = new Sneaker(req.body);
    const savedSneaker = await sneaker.save();
    res.status(201).json(savedSneaker);
  } catch (error) {
    res.status(400).json({ message: 'Error creating sneaker', error });
  }
};

// Update a sneaker
const updateSneaker = async (req, res) => {
  try {
    const updatedSneaker = await Sneaker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSneaker) return res.status(404).json({ message: 'Sneaker not found' });
    res.status(200).json(updatedSneaker);
  } catch (error) {
    res.status(400).json({ message: 'Error updating sneaker', error });
  }
};

// Delete  sneaker
const deleteSneaker = async (req, res) => {
  try {
    const deletedSneaker = await Sneaker.findByIdAndDelete(req.params.id);
    if (!deletedSneaker) return res.status(404).json({ message: 'Sneaker not found' });
    res.status(200).json({ message: 'Sneaker deleted', sneaker: deletedSneaker });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting sneaker', error });
  }
};

module.exports = {
  getSneakers,
  createSneaker,
  updateSneaker,
  deleteSneaker,
};