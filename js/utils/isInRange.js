const isInRange = (value, rangeArray) => {
  if (value >= rangeArray[0] && value < rangeArray[1]) {
    return true;
  }
  return false;
};

export {isInRange};
