const Contact = require('../models/contact.model');

/**
 * Create a new contact
 * @param {Object} contactBody
 * @returns {Promise<Contact>}
 */
const createContact = async (contactBody) => {
  const contact = await Contact.create(contactBody);
  return contact;
};

module.exports = {
  createContact,
};
