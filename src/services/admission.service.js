const Admission = require('../models/admission.model');

/**
 * Create a new admission
 * @param {Object} admissionBody
 * @returns {Promise<Admission>}
 */
const createAdmission = async (admissionBody) => {
  const admission = await Admission.create(admissionBody);
  return admission;
};

module.exports = {
  createAdmission,
};
