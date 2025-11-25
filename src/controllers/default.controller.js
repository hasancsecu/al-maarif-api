const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { admissionService, contactService } = require('../services');
const pick = require('../utils/pick');

const index = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send('Hi :-)');
});

const createAdmission = catchAsync(async (req, res) => {
  const admission = await admissionService.createAdmission(req.body);
  res.status(httpStatus.CREATED).send(admission);
});

const createContact = catchAsync(async (req, res) => {
  const contact = await contactService.createContact(req.body);
  res.status(httpStatus.CREATED).send(contact);
});

const getAdmissions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await admissionService.queryAdmissions(filter, options);
  res.send(result);
});

const getContacts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await contactService.queryContacts(filter, options);
  res.send(result);
});

module.exports = {
  index,
  createAdmission,
  createContact,
  getAdmissions,
  getContacts,
};
