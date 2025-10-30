const express = require('express');
const validate = require('../../middlewares/validate');
const { defaultController } = require('../../controllers');
const admissionValidation = require('../../validations/admission.validation');
const contactValidation = require('../../validations/contact.validation');

const router = express.Router();

router.get('/', defaultController.index);

router.post('/admission', validate(admissionValidation.createAdmission), defaultController.createAdmission);

router.post('/contact', validate(contactValidation.createContact), defaultController.createContact);

module.exports = router;
