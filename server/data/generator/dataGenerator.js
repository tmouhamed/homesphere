const faker = require('faker');
const uuid = require('uuid/v4');
const fs = require('fs');

const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const addProperty = (array, propertyArray) => {
    const numberOfProperties = Math.floor(propertyArray.length / array.length);

    for (let i = 0; i < array.length; i++) {
        let properties = [];
        for (let j = i * numberOfProperties; j < (i + 1) * numberOfProperties; j++) {
            propertyArray[j].agentId = array[i].agentId;
            properties.push(propertyArray[j].propertyId);
        }
        array[i].properties = properties;
    }
    return array;
}

if (fs.existsSync("./data/propertiesData.json") && fs.existsSync("./data/agentsData.json")) {
    propertiesData = fs.readFileSync("./data/propertiesData.json");
    agentsData = fs.readFileSync("./data/agentsData.json");
} else {
    // Generate Properties
    let propertiesCount = 30;
    const propertiesTypes = ["Condo", "Townhouse", "House"];
    const propertiesCategories = ["For Rent", "For Sale"];
    const propertiesImages = ["house.jpg"];
    let propertiesData = [];
    for (var i = 0; i < propertiesCount; i++) {
        let newProperty = {
            "propertyId": uuid(10),
            "address": faker.fake("{{address.streetAddress}}"),
            "zipCode": faker.fake("{{address.zipCode}}"),
            "city": "Toronto",
            "propertyType": propertiesTypes[faker.random.number({ 'min': 0, 'max': propertiesTypes.length - 1 })],
            "category": propertiesCategories[faker.random.number({ 'min': 0, 'max': propertiesCategories.length - 1 })],
            "price": faker.fake("{{commerce.price}}"),
            "beds": faker.random.number({ 'min': 1, 'max': 4 }),
            "baths": faker.random.number({ 'min': 1, 'max': 4 }),
            // "image": str.concat("public/assets/", propertiesImages[faker.random.number({ 'min': 0, 'max': propertiesImages.length-1 })])
        };
        propertiesData.push(newProperty);
    }
    // Generate Agents
    let agentsCount = 5;
    let agentsData = [];
    for (var i = 0; i < agentsCount; i++)
    {
        var randomEmail = faker.internet.email();
        let newAgent = {
            "agentId": uuid(10),
            "email": randomEmail,
            "password": faker.fake("{{internet.password}}"),
            "firstName": faker.fake("{{name.firstName}}"),
            "lastName": faker.fake("{{name.lastName}}"),
            "phone": faker.fake("{{phone.phoneNumberFormat}}"),
            "photo": faker.fake("{{image.people}}"),
            "userName": ''
        }
        agentsData.push(newAgent);
    }
    // Assign properties to agents
    propertiesData = shuffle(propertiesData);
    let newArray = addProperty(agentsData, propertiesData);
    propertiesData = shuffle(propertiesData);
    // Write to desk
    fs.writeFileSync('./data/agentsData.json', JSON.stringify(newArray));
    fs.writeFileSync('./data/propertiesData.json', JSON.stringify(propertiesData));
}