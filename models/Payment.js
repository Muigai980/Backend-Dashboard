const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  personName: { type: String, required: true },
  confirmationCode: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);