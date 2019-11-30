const express = require('express');
const router = express.Router();
require('../data/generator/agentsGenerator');
const agentsData = require('../data/agentsData.json')

router.get('/', (request, response) => {

    response.json(agentsData);

})

module.exports = router;