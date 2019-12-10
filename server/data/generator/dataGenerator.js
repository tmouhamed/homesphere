const faker = require('faker');
const uuid = require('uuid/v4');
const fs = require('fs');
const propertyImages = [
    ["https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg","https://cdn.pixabay.com/photo/2017/08/17/11/47/indoor-2650995__480.jpg", "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923__480.jpg", "https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656__480.jpg", "https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272__480.jpg"],
    ["https://cdn.pixabay.com/photo/2015/05/15/14/30/interior-768526__480.jpg", "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184__480.jpg", "https://cdn.pixabay.com/photo/2019/04/15/18/13/bathroom-4130000__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/08/05/12/08/living-room-2583032__480.jpg", "https://cdn.pixabay.com/photo/2016/11/18/13/02/bed-1834327__480.jpg", "https://cdn.pixabay.com/photo/2015/12/05/23/41/bathtub-1078929__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/06/13/22/43/interior-2400372__480.jpg", "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg", "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091__480.jpg", "https://cdn.pixabay.com/photo/2016/01/23/23/54/bed-1158267__480.jpg", "https://cdn.pixabay.com/photo/2017/08/19/15/53/bathroom-2658976__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/29/01/35/blur-1866580__480.jpg", "https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594__480.jpg", "https://cdn.pixabay.com/photo/2017/09/05/19/42/bathroom-2718922__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/12/11/13/33/interior-3012235__480.jpg", "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168__480.jpg", "https://cdn.pixabay.com/photo/2018/08/09/03/58/home-3593729__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__480.jpg", "https://cdn.pixabay.com/photo/2016/08/07/00/44/bed-1575491__480.jpg", "https://cdn.pixabay.com/photo/2018/03/21/02/01/bathroom-3245330__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__480.jpg", "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389258__480.jpg", "https://cdn.pixabay.com/photo/2018/09/20/02/44/bathroom-3689922__480.jpg"],
    ["https://cdn.pixabay.com/photo/2013/09/24/12/08/apartment-185779__480.jpg", "https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020__480.jpg", "https://cdn.pixabay.com/photo/2015/08/09/00/32/bathroom-881124__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191__480.jpg", "https://cdn.pixabay.com/photo/2017/08/05/22/08/bed-2586034__480.jpg", "https://cdn.pixabay.com/photo/2018/04/24/07/15/bathroom-3346387__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/03/25/23/09/living-room-2174575__480.jpg", "https://cdn.pixabay.com/photo/2018/01/23/06/58/modern-minimalist-bedroom-3100786__480.jpg", "https://cdn.pixabay.com/photo/2015/08/23/01/58/bathtub-902362__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192__480.jpg", "https://cdn.pixabay.com/photo/2018/02/12/10/07/modern-minimalist-bedroom-3147893__480.jpg", "https://cdn.pixabay.com/photo/2017/09/15/15/22/bathroom-2752475__480.jpg"],
    ["https://cdn.pixabay.com/photo/2016/07/17/10/31/living-room-1523480__480.jpg", "https://cdn.pixabay.com/photo/2018/04/10/06/29/apartment-3306501__480.jpg", "https://cdn.pixabay.com/photo/2014/07/10/17/18/shower-389273__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/02/12/10/07/apartment-lounge-3147892__480.jpg", "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg", "https://cdn.pixabay.com/photo/2015/12/05/23/12/bathtub-1078865__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/08/02/00/03/interior-2568850__480.jpg", "https://cdn.pixabay.com/photo/2019/11/15/14/44/bedroom-4628573__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/24/bathroom-2094736__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/03/08/20/14/kitchen-living-room-4043091__480.jpg", "https://cdn.pixabay.com/photo/2018/08/09/06/13/home-3593832__480.jpg", "https://cdn.pixabay.com/photo/2017/03/10/10/07/bathroom-2132342__480.jpg"],
    ["https://cdn.pixabay.com/photo/2014/07/10/17/17/architectural-389253__480.jpg", "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196__480.jpg", "https://cdn.pixabay.com/photo/2014/10/16/08/41/bathroom-490781__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/08/23/00/56/home-3625018__480.jpg", "https://cdn.pixabay.com/photo/2015/12/05/23/22/bedroom-1078890__480.jpg", "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171__480.jpg"],
    ["https://cdn.pixabay.com/photo/2017/07/31/21/34/living-wall-2561274__480.jpg", "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389258__480.jpg", "https://cdn.pixabay.com/photo/2016/08/26/15/06/bathroom-1622403__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/03/16/13/45/furniture-3231285__480.jpg", "https://cdn.pixabay.com/photo/2018/02/24/23/12/bedroom-3179445__480.jpg", "https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/04/23/09/03/indoor-4148889__480.jpg", "https://cdn.pixabay.com/photo/2017/03/23/03/44/bed-2167252__480.jpg", "https://cdn.pixabay.com/photo/2018/06/26/15/56/condo-3499679__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/07/11/20/09/interior-3531779__480.jpg", "https://cdn.pixabay.com/photo/2017/10/19/16/46/bed-2868330__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/23/shower-2094713__480.jpg"],
    ["https://cdn.pixabay.com/photo/2018/07/16/20/39/red-3542789__480.jpg", "https://cdn.pixabay.com/photo/2015/03/26/09/42/bedroom-690129__480.jpg", "https://cdn.pixabay.com/photo/2018/12/05/10/02/faucet-3857471__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148892__480.jpg", "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602__480.jpg", "https://cdn.pixabay.com/photo/2018/07/12/09/56/bathroom-3532924__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/05/10/10/51/living-room-4193214__480.jpg", "https://cdn.pixabay.com/photo/2019/08/19/13/58/hotel-4416515__480.jpg", "https://cdn.pixabay.com/photo/2017/09/23/00/29/bath-room-2777623__480.jpg"],
    ["https://cdn.pixabay.com/photo/2019/03/05/22/58/living-room-4037295__480.jpg", "https://cdn.pixabay.com/photo/2016/08/07/00/44/bed-1575491__480.jpg", "https://cdn.pixabay.com/photo/2015/05/05/01/13/bath-753272__480.jpg"],
    ["https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://cdn.pixabay.com/photo/2018/03/01/03/52/furniture-3189674__480.jpg", "https://cdn.pixabay.com/photo/2017/02/24/12/24/bathroom-2094733__480.jpg"]]


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