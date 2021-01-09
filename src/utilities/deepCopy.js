const deepCopy = (original) => {
  return JSON.parse(JSON.stringify(original));
};

export default deepCopy;