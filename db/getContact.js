const getAll = require("./getAll");
console.log(getAll);

const getContactById = async (contactId)=> {
    try {
        const contacts = await getAll();
        const findContact = contacts.find((item) => item.id === contactId);
        if(!findContact) {
            throw new Error("Id incorrect");
        }
        return findContact;
    } 
    catch (error) {
        throw error;
    }
}

module.exports = getContactById;