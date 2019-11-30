const express = require('express');
const router = express.Router();
require('../data/generator/propertyGenerator');
const propertiesData = require('../data/propertiesData.json')

router.get('/', (request, response) => {

    response.send(propertiesData);

})

module.exports = router;