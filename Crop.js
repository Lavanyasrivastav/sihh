const mongoose = require('mongoose');


const CropSchema = new mongoose.Schema({
crop: String,
soil: String,
region: String,
advice: String
});


module.exports = mongoose.model('Crop', CropSchema);