const express = require('express');
const { getSneakers, createSneaker, updateSneaker, deleteSneaker } = require('../controllers/sneakerController');
const router = express.Router();

// Define your routes
router.get('/sneakers', getSneakers);
router.post('/sneakers', createSneaker);
router.put('/sneakers/:id', updateSneaker);
router.delete('/sneakers/:id', deleteSneaker);

module.exports = router;