const fs = require("fs").promises;

const contactsPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  const str = JSON.stringify(contacts);

  try {
    await fs.writeFile(contactsPath, str);
  } catch (error) {
    throw error;
  }
};

module.exports = updateContacts;
