const express = require('express');
const router = express.Router();
const Complaint = require('../models/complaint');

// POST route to submit a complaint
router.post('/', async (req, res) => {
  const { complaint } = req.body;
  const newComplaint = new Complaint({ complaint });

  try {
    const savedComplaint = await newComplaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
