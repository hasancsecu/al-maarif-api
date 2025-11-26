const mongoose = require('mongoose');
const app = require('../app');
const config = require('../config/config');
const logger = require('../config/logger');

let isConnected = false;

// Connect to MongoDB once, reused across requests
const connectDB = async () => {
  if (!isConnected) {
    await mongoose.connect(config.mongoose.url, config.mongoose.options);
    isConnected = true;
    logger.info('Connected to MongoDB');
  }
};

module.exports = async (req, res) => {
  try {
    await connectDB();

    // Express can handle the request
    app(req, res);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
