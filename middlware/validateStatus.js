const validateStatus = (req, res, next) => {
  if (!req.body || !req.body.status) {
    return res.status(400).json({ error: 'Status is required in the body.' });
  }

  const { status } = req.body;
  const allowedStatuses = ['Pending', 'In Progress', 'Completed', 'On Hold'];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status value. Allowed values: ${allowedStatuses.join(', ')}` });
  }

  next();
};

module.exports = validateStatus;
