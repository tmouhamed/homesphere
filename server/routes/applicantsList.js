const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
require('../data/generator/dataGenerator');
const applicantsData = require('../data/applicantsData.json')

router.get('/', (request, response) => {

    response.json(applicantsData);

})

module.exports = router;