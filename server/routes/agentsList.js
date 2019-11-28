const express = require('express');
const router = express.Router();

const agentsData = require('../data/agentsData');

router.get('/', (request, response) => {

    response.send(agentsData);

})

module.exports = router;