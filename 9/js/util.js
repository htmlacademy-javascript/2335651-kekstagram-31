const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNumberCommentsCount = () => getRandomInteger(6, 50);
const getRandomNumberAvatars = () => getRandomInteger(1, 6);
const getRandomNumberLikes = () => getRandomInteger(15, 200);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumberAvatars, getRandomNumberLikes, getRandomArrayElement, getRandomNumberCommentsCount, isEscapeKey};
