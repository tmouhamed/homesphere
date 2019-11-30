const faker = require('faker');
const uuid = require('uuid/v4');
const fs = require('fs');
const agentArray = require('../agentsData');

const addAgent = (array) => {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < agentArray.length; i++) {
            for (let k = 0; k < agentArray[i].properties.length; k++) {
                if (agentArray[i].properties[k] == j) {
                       array[j].agentId = agentArray[i].agentId;
                }
            }
        }
    
    }
    return array;
}

const writeToDisk = (array) => {
    fs.writeFileSync('./data/propertiesData.json', JSON.stringify(array))
}

const propertiesData = [
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    },
    {
        "propertyId": uuid(3),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "price": faker.fake("${{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 })
    }
]

addAgent(propertiesData);
writeToDisk(propertiesData);