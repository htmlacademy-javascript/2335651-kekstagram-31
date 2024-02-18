//Функция для проверки длины строки.
function stringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

// Строка короче 20 символов
// eslint-disable-next-line no-console
console.log(stringLength('проверяемая строка', 20));
// Длина строки ровно 18 символов
// eslint-disable-next-line no-console
console.log(stringLength('проверяемая строка', 18));
// Строка длиннее 10 символов
// eslint-disable-next-line no-console
console.log(stringLength('проверяемая строка', 10));


