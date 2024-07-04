const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  complaint: {
    type: String,
    required: true,
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;
