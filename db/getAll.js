const fs = require("fs").promises;
const path = require("path");

const contactsPath = require("./contactsPath");

const getAll = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw error;
  }
};

module.exports = getAll;
