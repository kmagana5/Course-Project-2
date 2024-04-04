// server.js

//last random thing

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

app.use('/users', usersRouter);
app.use('/addCart', cartRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
