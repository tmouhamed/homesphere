const express = require('express');
const router = express.Router();
require('../data/generator/dataGenerator');
const propertiesData = require('../data/propertiesData.json')

router.get('/', (request, response) => {

    response.send(propertiesData);

})

router.get('/:id', (request, response) => {
    const matchingProperty = propertiesData.find(element => element.propertyId === request.params.id);
    matchingProperty ?
        response.status(201).json(matchingProperty) :
        response.status(404).json({ message: 'No video with that id exists' });
})

module.exports = router;