const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tutorSchema = new Schema({
    id: Number,
    subject: String,
    location: String,
    time: String
}, {collection: 'tutorInfo'})

const Tutors = mongoose.model('Tutors', tutorSchema);

module.exports = Tutors;