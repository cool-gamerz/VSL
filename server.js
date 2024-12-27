const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schema and model
const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const Comment = mongoose.model('Comment', commentSchema);

// Routes
app.post('/api/comments', (req, res) => {
    const newComment = new Comment({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    newComment.save()
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/api/comments', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
