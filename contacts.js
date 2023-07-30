const {nanoid} = require('nanoid');
const path = require('node:path');
const {
  getContactsDataInArray,
  filterArray,
  filterArrayOpp,
  saveArrayToFile,
} = require('./contactsFunc');

const contactsPath = path.format({ dir: './db', base: 'contacts.json' });

const listContacts = async () => {
  const contacts = await getContactsDataInArray(contactsPath);
  console.table(contacts);
};

const getContactById = async (contactId = '') => {
  if (contactId === '') {
    return console.log('Please write id');
  } else {
    const contacts = await getContactsDataInArray(contactsPath);
    const contact = filterArray(contacts, contactId);
    if (contact.length > 0) {
      console.table(contact);
    } else {
      console.log('There is no contact with given id.');
    }
  }
};

const removeContact = async (contactId = '') => {
  if (contactId === '') {
    return console.log('Please write id');
  } else {
    const contacts = await getContactsDataInArray(contactsPath);
    const remContact = filterArrayOpp(contacts, contactId);
    if (remContact.length < contacts.length) {
      saveArrayToFile(contactsPath, remContact);
      console.log('Contact succesfully removed');
    } else {
      console.log('There is no contact with given id. Contacts intact');
    }
  }
};

const addContact = async (name = '', email, phone) => {
  const contacts = await getContactsDataInArray(contactsPath);
  if (name === '') {
    return console.log('Contact must have a name');
  } else
  {
    const contact = {
      id: nanoid(),
      name: name,
      email: email,
      phone: phone,
    };
    const newArr = [...contacts, contact];
    saveArrayToFile(contactsPath, newArr);
    console.log('Contact succesfully added');
  }
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
