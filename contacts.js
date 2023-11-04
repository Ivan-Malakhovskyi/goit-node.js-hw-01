import fsModules from "fs/promises";
import { nanoid } from "nanoid";

import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

const updateContact = (contacts) =>
  fsModules.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  try {
    const contacts = await fsModules.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error.message);
  }
};

export const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const foundConacts = contacts.find((contact) => contact.id === contactId);
    return foundConacts || null;
  } catch (error) {
    console.log(error.message);
  }
};

export const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    await updateContact(contacts);
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

export const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((contact) => contact.id === contactId);

    if (idx === -1) {
      return null;
    }

    const [result] = contacts.splice(idx, 1);
    await updateContact(contacts);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
