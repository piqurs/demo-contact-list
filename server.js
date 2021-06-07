const cuid = require("cuid");
const faker = require("faker");

module.exports = () => {
  const data = { contacts: [] };
  // Create 3 contacts
  for (let i = 0; i < 3; i++) {
    data.contacts.push({
      id: cuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    });
  }
  return data;
};
