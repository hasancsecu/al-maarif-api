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

/**
 * Query for admissions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAdmissions = async (filter, options) => {
  const admissions = await Admission.paginate(filter, options);
  return admissions;
};

module.exports = {
  createAdmission,
  queryAdmissions,
};
