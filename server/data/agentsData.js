const faker = require('faker');
const uuid = require('uuid/v4');

const data = [{
    "id": uuid(3),
    "firstName": faker.fake("{{name.firstName}}"),
    "lastName": faker.fake("{{name.lastName}}"),
    "phone": faker.fake("{{phone.phoneNumberFormat}}")
}
]
module.exports = data;