const httpStatus = require('http-status');
const Contact = require('../models/contact.model');
const ApiError = require('../utils/ApiError');

/**
 * Create a new contact
 * @param {Object} contactBody
 * @returns {Promise<Contact>}
 */
const createContact = async (contactBody) => {
  const contact = await Contact.create(contactBody);
  return contact;
};

/**
 * Query for contacts
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryContacts = async (filter, options) => {
  const contacts = await Contact.paginate(filter, options);
  return contacts;
};

/**
 * Get contact by id
 * @param {ObjectId} id
 * @returns {Promise<Contact>}
 */
const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  return contact;
};

module.exports = {
  createContact,
  queryContacts,
  getContactById,
};
