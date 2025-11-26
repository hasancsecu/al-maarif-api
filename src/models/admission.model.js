const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const admissionSchema = mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: { type: String, required: true },
    course: { type: String, required: true },
    classType: { type: String, required: true },
    preferredTime: { type: String, required: true },
    status: { type: String, enum: ['pending', 'acknowledged', 'approved', 'rejected'], default: 'pending' },
    comments: { type: String },
  },
  { timestamps: true }
);

admissionSchema.plugin(toJSON);
admissionSchema.plugin(paginate);

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
