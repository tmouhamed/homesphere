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

let propertiesCount = 30;
const propertiesTypes = ["Condo", "Townhouse", "House"];
const propertiesCategories = ["For Rent", "For Sale"];
const propertiesImages = ["house.jpg"]
let propertiesData = []
for (var i = 0; i < propertiesCount; i++)
{
    let newProperty = {
        "propertyId": uuid(10),
        "address": faker.fake("{{address.streetAddress}}"),
        "zipCode": faker.fake("{{address.zipCode}}"),
        "city": "Toronto",
        "propertyType": propertiesTypes[faker.random.number({ 'min': 0, 'max': propertiesTypes.length-1 })],
        "category": propertiesCategories[faker.random.number({ 'min': 0, 'max': propertiesCategories.length-1 })],
        "price": faker.fake("{{commerce.price}}"),
        "beds": faker.random.number({ 'min': 1, 'max': 4 }),
        "baths": faker.random.number({ 'min': 1, 'max': 4 }),
        // "image": str.concat("public/assets/", propertiesImages[faker.random.number({ 'min': 0, 'max': propertiesImages.length-1 })])
    }
    propertiesData.push(newProperty);
}

addAgent(propertiesData);
writeToDisk(propertiesData);