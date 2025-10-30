const Joi = require('joi');

const createAdmission = {
  body: Joi.object().keys({
    studentName: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.string().valid('male', 'female').required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    course: Joi.string().required(),
    classType: Joi.string().required(),
    preferredTime: Joi.string().required(),
    comments: Joi.string().allow('', null),
  }),
};

module.exports = {
  createAdmission,
};
