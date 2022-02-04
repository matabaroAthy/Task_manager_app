const mongoose = require('mongoose');
const env = require('dotenv/config');
const connectDB = (URL) => {mongoose.connect(process.env.SECRET_URL)};

module.exports = connectDB;
