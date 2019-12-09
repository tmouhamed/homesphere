const faker = require('faker');
const uuid = require('uuid/v4');
const fs = require('fs');
const propertyImages = [
    ["https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg","https://image.shutterstock.com/image-photo/navy-dark-blue-master-bedroom-260nw-704922295.jpg", "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272__480.jpg"],
    ["https://cdn.pixabay.com/photo/2015/05/15/14/30/interior-768526__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2019/04/15/18/13/bathroom-4130000__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/08/05/12/08/living-room-2583032__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2015/12/05/23/41/bathtub-1078929__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/06/13/22/43/interior-2400372__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2018/09/16/12/23/kitchen-3681393__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/08/19/15/53/bathroom-2658976__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/29/01/35/blur-1866580__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/09/05/19/42/bathroom-2718922__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/12/11/13/33/interior-3012235__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2018/08/09/03/58/home-3593729__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2018/03/21/02/01/bathroom-3245330__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2018/09/20/02/44/bathroom-3689922__480.jpg"],
    ["https://cdn.pixabay.com/photo/2013/09/24/12/08/apartment-185779__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2015/08/09/00/32/bathroom-881124__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2018/04/24/07/15/bathroom-3346387__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/03/25/23/09/living-room-2174575__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2015/08/23/01/58/bathtub-902362__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/09/15/15/22/bathroom-2752475__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/07/17/10/31/living-room-1523480__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://images.unsplash.com/photo-1517414628894-83d47b22f233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
    ["https://cdn.pixabay.com/photo/2018/02/12/10/07/apartment-lounge-3147892__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
    ["https://cdn.pixabay.com/photo/2017/08/02/00/03/interior-2568850__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://images.unsplash.com/photo-1564071435606-c6cd35cb5c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
    ["https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/03/10/10/07/bathroom-2132342__480.jpg"],
    ["https://cdn.pixabay.com/photo/2014/07/10/17/17/architectural-389253__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/08/23/00/56/home-3625018__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/07/31/21/34/living-wall-2561274__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/03/16/13/45/furniture-3231285__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/04/23/09/03/indoor-4148889__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/07/11/20/09/interior-3531779__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/07/16/20/39/red-3542789__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148892__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/05/10/10/51/living-room-4193214__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/03/05/22/58/living-room-4037295__480.jpg", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"],
    ["https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716__480.jpg"]]


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
const addApplicant = (propertyArray, applicantArray) => {
    const numberOfProperties = 4;
    for (let i = 0; i < applicantArray.length; i++) {
        let properties = [];
        for (let j = 0; j < numberOfProperties; j++) {
            let randomIdx = faker.random.number({ 'min': 0, 'max': propertyArray.length - 1 });
            propertyArray[randomIdx].applicants.push(applicantArray[i].applicantId);
            properties.push(propertyArray[randomIdx].propertyId);
        }
        applicantArray[i].properties = properties;
    }
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

if (fs.existsSync("./data/propertiesData.json") && fs.existsSync("./data/agentsData.json") && fs.existsSync("./data/applicantsData.json")) {
    propertiesData = fs.readFileSync("./data/propertiesData.json");
    agentsData = fs.readFileSync("./data/agentsData.json");
    applicantsData = fs.readFileSync("./data/applicantsData.json");
} else {
    // Generate Properties
    let propertiesCount = 30;
    const propertiesTypes = ["Condo", "Townhouse", "House"];
    const propertiesCategories = ["For Rent", "For Sale"];
    const propertiesImages = ["house.jpg"];
    let propertiesData = [];
    for (var i = 0; i < propertyImages.length; i++) {
        
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
            "image": propertyImages[i],
            "agentId": "",
            "applicants": []
        };
        propertiesData.push(newProperty);
    }
    // Generate Agents
    let agentsCount = 5;
    let agentsData = [];
    for (var i = 0; i < agentsCount; i++) {
        let newAgent = {
            "agentId": uuid(10),
            "email": faker.internet.email(),
            "password": faker.fake("{{internet.password}}"),
            "firstName": faker.fake("{{name.firstName}}"),
            "lastName": faker.fake("{{name.lastName}}"),
            "phone": faker.fake("{{phone.phoneNumberFormat}}"),
            "photo": faker.fake("{{image.avatar}}"),
            "company": faker.fake("{{company.companyName}}"),
            "jobTitle": "SALESPERSON",
            "properties": [],
            "userName": ''
        };
        agentsData.push(newAgent);
    }
    // Generate Applicants
    let applicantsCount = 60;
    let applicantsData = [];
    for (var i = 0; i < applicantsCount; i++) {
        let newApplicant = {
            "applicantId": uuid(10),
            "email": faker.internet.email(),
            "password": faker.fake("{{internet.password}}"),
            "firstName": faker.fake("{{name.firstName}}"),
            "lastName": faker.fake("{{name.lastName}}"),
            "phone": faker.fake("{{phone.phoneNumberFormat}}"),
            "properties": []
        };
        applicantsData.push(newApplicant);
    }
    // Assign applicants to properties
    addApplicant(propertiesData, applicantsData);
    // Assign properties to agents
    addProperty(agentsData, propertiesData);
    propertiesData = shuffle(propertiesData);
    // Write to desk
    fs.writeFileSync('./data/agentsData.json', JSON.stringify(agentsData));
    fs.writeFileSync('./data/propertiesData.json', JSON.stringify(propertiesData));
    fs.writeFileSync('./data/applicantsData.json', JSON.stringify(applicantsData));
}