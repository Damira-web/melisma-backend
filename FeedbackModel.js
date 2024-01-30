const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Feedback', feedbackSchema);