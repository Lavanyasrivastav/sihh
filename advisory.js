const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop').default;


// Get advice based on crop, soil, region
router.post('/', async (req, res) => {
const { crop, soil, region } = req.body;


if (!crop || !soil || !region) {
return res.status(400).json({ message: 'All fields are required' });
}


const adviceData = await Crop.findOne({ crop, soil });
if (adviceData) {
res.json({ advice: adviceData.advice });
} else {
res.json({ advice: `Generic advice: Maintain soil moisture and use balanced fertilizer.` });
}
});


module.exports = router;