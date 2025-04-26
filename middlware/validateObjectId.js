const mongoose = require('mongoose');

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: 'Invalid Task ID format.' });
  }

  next(); // If valid, continue to the controller
};

module.exports = validateObjectId;
