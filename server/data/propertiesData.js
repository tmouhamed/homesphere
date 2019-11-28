const faker = require('faker');
const uuid = require('uuid/v4');

const data = [{
    "id": uuid(3),
    "zipCode": faker.fake("{{address.zipCode}}"),
    "city": "Toronto",
    "price": faker.fake("${{commerce.price}}"),
    "beds": faker.random.number({'min': 1, 'max': 4}),
    "baths": faker.random.number({'min': 1, 'max': 4})
},
{
    "id": uuid(3),
    "zipCode": faker.fake("{{address.zipCode}}"),
    "city": "Toronto",
    "price": faker.fake("${{commerce.price}}"),
    "beds": faker.random.number({'min': 1, 'max': 4}),
    "baths": faker.random.number({'min': 1, 'max': 4})
}
,
{
    "id": uuid(3),
    "zipCode": faker.fake("{{address.zipCode}}"),
    "city": "Toronto",
    "price": faker.fake("${{commerce.price}}"),
    "beds": faker.random.number({'min': 1, 'max': 4}),
    "baths": faker.random.number({'min': 1, 'max': 4})
},
{
    "id": uuid(3),
    "zipCode": faker.fake("{{address.zipCode}}"),
    "city": "Toronto",
    "price": faker.fake("${{commerce.price}}"),
    "beds": faker.random.number({'min': 1, 'max': 4}),
    "baths": faker.random.number({'min': 1, 'max': 4})
},
{
    "id": uuid(3),
    "zipCode": faker.fake("{{address.zipCode}}"),
    "city": "Toronto",
    "price": faker.fake("${{commerce.price}}"),
    "beds": faker.random.number({'min': 1, 'max': 4}),
    "baths": faker.random.number({'min': 1, 'max': 4})
},
{
    "id": uuid(3),
    "zipCode": faker.fake("{{address.zipCode}}"),
    "city": "Toronto",
    "price": faker.fake("${{commerce.price}}"),
    "beds": faker.random.number({'min': 1, 'max': 4}),
    "baths": faker.random.number({'min': 1, 'max': 4})
}]
module.exports = data;