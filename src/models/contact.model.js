const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'replied'], default: 'new' },
  },
  { timestamps: true }
);

contactSchema.plugin(toJSON);
contactSchema.plugin(paginate);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
