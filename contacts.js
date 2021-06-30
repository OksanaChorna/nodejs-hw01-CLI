const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");
const contacts = require("./db");
const contactsPath = path.join(__dirname, "./db/contacts.json");
const updateContacts = require("./db/updContact");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error.message);
  }
}
// listContacts();

async function getContactById(contactId) {
  try {
    const listContacts = await contacts.getAll();
    const findContact = await listContacts.find((contact) => {
      return String(contact.id) === String(contactId);
    });
    console.log(findContact);

    if (!findContact) {
      throw new Error("Id incorrect");
    }
  } catch (error) {
    throw error;
  }
}
// getContactById(5);

async function removeContact(contactId) {
  try {
    const listContacts = await contacts.getAll();
    const index = listContacts.findIndex(
      (contact) => String(contact.id) === String(contactId)
    );
    if (index === -1) {
      throw new Error("Id incorrect");
    }
    const filteredContacts = listContacts.filter((contact) => {
      return String(contact.id) !== String(contactId);
    });
    await updateContacts(filteredContacts);
    console.table(filteredContacts);
  } catch (error) {
    throw error;
  }
}
// removeContact(2);

async function addContact(name, email, phone) {
  const newContact = { id: v4(), name, email, phone };
  try {
    const listContacts = await contacts.getAll();
    const newContacts = [...listContacts, newContact];
    updateContacts(newContacts);
    console.table(newContacts);
  } catch (error) {
    throw error;
  }
}
// addContact("Cat", "cat@mew.com", "3422486");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
