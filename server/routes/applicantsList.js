const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
require('../data/generator/dataGenerator');
const applicantsData = require('../data/applicantsData.json')

router.get('/', (request, response) => {

    response.json(applicantsData);

})

router.post('/', (request, response) => {
    const applicant = request.body;

    const newApplicant = {
        id: uuid(3),
        ...applicant
    }
    
    applicantsData.push(newApplicant);

    response.status(200).send(newApplicant)

})


module.exports = router;