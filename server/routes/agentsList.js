const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
require('../data/generator/agentsGenerator');
const agentsData = require('../data/agentsData.json')

router.get('/', (request, response) => {

    response.json(agentsData);

})

router.post('/', (request, response) => {
    console.log(request.body);
    const agent = request.body;

    const newAgent = {
        id: uuid(3),
        ...agent
    }
    
    agentsData.push(newAgent);

    response.status(200).send(newAgent)

})

module.exports = router;