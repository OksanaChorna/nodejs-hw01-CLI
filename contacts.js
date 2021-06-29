const fs = require("fs").promises
const path = require("path")
const contacts = require("./db");

const contactsPath = path.join(__dirname, "./db/contacts.json");
// console.log(contactsPath);

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
// listContacts()

// async function getContactById(contactId) {
//   try {
//       const listContacts = await contacts.getAll();
//       const findContact = listContacts.find(contact => {
//         //   console.log(contact);
//         //   console.log(contact.id);
//           contact.id === contactId
//       })
//       if (!findContact) {
//           throw new Error("Id incorrect")
//       }
//       console.log(findContact);
//     // return findContact;
//   } catch (error) {
//     throw error;
//   }
// }
// getContactById(1)

const getContactById = async (contactId) => {
  try {
    const listContacts = await contacts.getAll();
    const findContact = listContacts.find((item) => item.id === contactId);
    if (!findContact) {
      throw new Error("Id incorrect");
      }
      console.log(findContact);
    // return findContact;
  } catch (error) {
    throw error;
  }
};
getContactById(5)

// // function removeContact(contactId) {
// //   // ...твой код
// // }

// // function addContact(name, email, phone) {
// //   // ...твой код
// // }


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
    // getContactById, 
    // removeContact, addContact
}