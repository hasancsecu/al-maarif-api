const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { admissionService, contactService } = require('../services');

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

module.exports = {
  index,
  createAdmission,
  createContact,
};
