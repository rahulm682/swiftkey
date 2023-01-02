const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    userText: {
        type: String,
        required: true,
    },
    wpm: {
        type: Number,
        required: true
    },
    correct: {
        type: Number,
        required: true
    },
    incorrect: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('report', ReportSchema);