//Функция для проверки длины строки.
// eslint-disable-next-line no-unused-vars
function checkLength (string, maxLength) {

  return string.length <= maxLength;
}

//Функция для проверки, является ли строка палиндромом
// eslint-disable-next-line no-unused-vars
function checkPalindrome (string) {
  const convertedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';

  for (let i = convertedString.length - 1; i >= 0; i--){
    // eslint-disable-next-line no-unused-vars
    newString += convertedString[i];
  }

  return newString === convertedString;
}

//Функция возарата числа из строки
// eslint-disable-next-line no-unused-vars
function parseString (string) {
  let newNumberString = '';
  const convertedString = string.toString();
  for (let i = 0; i <= convertedString.length; i++) {
    const number = parseInt(convertedString[i], 10);

    if (!isNaN(number)) {
      // eslint-disable-next-line no-unused-vars
      newNumberString += number;
    }
  }

  newNumberString = parseInt(newNumberString, 10);
  // eslint-disable-next-line no-undef
  return newNumberString;
}
