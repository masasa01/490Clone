const router = require('express').Router();
const Tutors = require('../models/tutorInfo.model');

router.route('/').get((request, response) => {
    Tutors.find()
        .then(tutorInfo => response.json(tutorInfo))
        .catch(error => response.status(400).json('Error: ' + error))
})

module.exports = router;