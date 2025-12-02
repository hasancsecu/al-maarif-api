const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const { defaultController } = require('../../controllers');
const admissionValidation = require('../../validations/admission.validation');
const contactValidation = require('../../validations/contact.validation');

const router = express.Router();

router.get('/', defaultController.index);

router.post('/admission', validate(admissionValidation.createAdmission), defaultController.createAdmission);
router.get('/admissions', auth('addmission'), defaultController.getAdmissions);
router.get('/admissions/:id', auth('addmission'), defaultController.getAdmissionById);

router.post('/contact', validate(contactValidation.createContact), defaultController.createContact);
router.get('/contacts', auth('contact'), defaultController.getContacts);
router.get('/contacts/:id', auth('contact'), defaultController.getContactById);

module.exports = router;
