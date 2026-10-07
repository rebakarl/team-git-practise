function isValidMinutes(value) {
  if (typeof value !== 'number' || !Number.isInteger(value)) return false;
  return value >= 1 && value <= 180;
}

module.exports = { isValidMinutes };
