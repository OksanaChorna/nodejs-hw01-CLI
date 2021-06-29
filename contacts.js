// const fs = require("fs").promises
// const path = require("path")

// const contactsPath = path.join(__dirname, "./db/contacts.json");
// console.log(contactsPath);

// // TODO: задокументировать каждую функцию
// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath);
//     const result = JSON.parse(data);
//     console.table(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // function getContactById(contactId) {
// //   // ...твой код
// // }

// // function removeContact(contactId) {
// //   // ...твой код
// // }

// // function addContact(name, email, phone) {
// //   // ...твой код
// // }


const contacts = require("./db");

(async ()=> {
    try {
        const listContacts = await contacts.getAll();
        console.log(listContacts);
    }
    catch(error){
        console.log(error);
    }
    
})()

// module.exports = {
//     listContacts,
//     // getContactById, removeContact, addContact
// }