const fs = require("fs").promises;
const path = require("path");
const contacts = require("./db");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");
const updateContacts = require("./db/updContact");

// TODO: задокументировать каждую функцию
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
      return contact.id === contactId;
    });
    if (!findContact) {
      throw new Error("Id incorrect");
    }
    console.log(findContact);
  } catch (error) {
    throw error;
  }
}
// getContactById(5);

async function removeContact(contactId) {
  try {
    const listContacts = await contacts.getAll();
    const index = listContacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      throw new Error("Id incorrect");
    }
    const filteredContacts = listContacts.filter(
      (contact) => contact.id !== contactId
    );
    await updateContacts(filteredContacts);
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

// По відеолекції
// const contacts = require("./db");

// (async ()=> {
//     try {
//         const listContacts = await contacts.getAll();
//         // console.table(listContacts);

//         const contactId = "5";
//         const contactById = await contacts.getContactById(contactId);
//         console.log(contactById);
//     }
//     catch(error){
//         console.log(error);
//     }

// })()

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
