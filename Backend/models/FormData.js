const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  pickup: String,
  drop: String,
  number: String,
  name: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
