
require('dotenv').config();
 // Load .env file
// // Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB Connection using .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
const advisoryRoutes = require('./routes/advisory');
app.use('/api/advisory', advisoryRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
