const utils = {
  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
  },
  generateID() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
};

export default utils;
