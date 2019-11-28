const express = require('express');
const router = express.Router();

const propertiesData = require('../data/propertiesData');

router.get('/', (request, response) => {

    response.send(propertiesData);

})

module.exports = router;