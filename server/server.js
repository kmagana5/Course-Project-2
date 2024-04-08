// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CourseProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const usersRouter = require('./routes/users');
const cartRouter = require ('./routes/addCart');
const getStructuresRoute = require('./routes/getStructures');
const getStructureByIdRoute = require('./routes/getStructureById');
const createStructureRoute = require('./routes/createStructure');
const updateStructureRoute = require('./routes/updateStructure');
const deleteStructureRoute = require('./routes/deleteStructure');

// Use routes
app.use('/api/structures', getStructuresRoute);
app.use('/api/structure', getStructureByIdRoute);
app.use('/api/structures', createStructureRoute);
app.use('/api/structures', updateStructureRoute);
app.use('/api/structures', deleteStructureRoute);

app.use('/users', usersRouter);
app.use('/addCart', cartRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
