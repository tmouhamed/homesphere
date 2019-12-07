const faker = require('faker/locale/en_CA');
const uuid = require('uuid/v4');
const propertyArray = require('../propertiesData');
const fs = require('fs');

const shuffle = (array) => {
    let newarray = [];
    for (let i = array.length; i >= 0; i--) {
        newarray.push(i);
        newarray.sort(() => Math.random() - 0.5);
    }
    return newarray;
}

const addProperty = (array) => {
    propertyShuffled = shuffle(propertyArray);
    const numberOfProperties = Math.floor(propertyArray.length / array.length);

    for (let i = 0; i < array.length; i++) {
        let properties = [];
        for (let j = i * numberOfProperties; j < (i + 1) * numberOfProperties; j++) {
            properties.push(propertyShuffled[j]);
            array[i].properties = properties;
        }
    }
    return array;
}

const writeOnDisk = (array) => {
    fs.writeFileSync('./data/agentsData.json', JSON.stringify(array))
}

const agentsData = [
    {
        "agentId": uuid(3),
        "firstName": faker.fake("{{name.firstName}}"),
        "lastName": faker.fake("{{name.lastName}}"),
        "phone": faker.fake("{{phone.phoneNumberFormat}}"),
        "userName": ''
    },
    {
        "agentId": uuid(3),
        "firstName": faker.fake("{{name.firstName}}"),
        "lastName": faker.fake("{{name.lastName}}"),
        "phone": faker.fake("{{phone.phoneNumberFormat}}"),
        "userName": ''
    },
    {
        "agentId": uuid(3),
        "firstName": faker.fake("{{name.firstName}}"),
        "lastName": faker.fake("{{name.lastName}}"),
        "phone": faker.fake("{{phone.phoneNumberFormat}}"),
        "userName": ''
    },
    {
        "agentId": uuid(3),
        "firstName": faker.fake("{{name.firstName}}"),
        "lastName": faker.fake("{{name.lastName}}"),
        "phone": faker.fake("{{phone.phoneNumberFormat}}"),
        "userName": ''
    }
]

let newArray = addProperty(agentsData);
writeOnDisk(newArray);