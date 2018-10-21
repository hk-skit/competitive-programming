/**
 * Replace space with '%20'.
 * @param {*} str
 * @param {*} trueLength
 */
const urlify = (str, trueLength) => {
  str = str.split('');
  let index = str.length - 1;
  for (let i = trueLength - 1; i >= 0; i -= 1) {
    if (str[i] === ' ') {
      str[index] = '0';
      str[index - 1] = '2';
      str[index - 2] = '%';
      index -= 3;
    } else {
      str[index] = str[i];
      index -= 1;
    }
  }
  return str.join('');
};

// Using regex
const urlify2 = (str, trueLength) => str.trim().replace(/\s/g, '%20');
