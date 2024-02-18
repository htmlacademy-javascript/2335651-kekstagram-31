//Функция для проверки длины строки.
// eslint-disable-next-line no-unused-vars
function stringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

//Функция для проверки, является ли строка палиндромом
// eslint-disable-next-line no-unused-vars
function stringPalindrome (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--){
    // eslint-disable-next-line no-unused-vars
    newString += string[i];
  }

  if (newString === string) {
    return true;
  }

  return false;
}

//Функция возарата числа
// eslint-disable-next-line no-unused-vars
function returnNumber (string) {
  let newNumberString = '';
  for (let i = 0; i <= string.length; i++) {
    const number = parseInt(string[i], 10);

    if (!isNaN(number)) {
      // eslint-disable-next-line no-unused-vars
      newNumberString += number;
    }
  }
  // eslint-disable-next-line no-undef
  return newNumberString;
}
