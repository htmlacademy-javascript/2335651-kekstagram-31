const DESCRIPTION = [
  'Hello world',
  'Have a good weekend',
  'Нaving a great time',
  'I learn a lot'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// eslint-disable-next-line no-unused-vars
const NAMES = [
  'Пётр Панов',
  'Мадина Большакова',
  'Ариана Беляева',
  'Олег Агафонов',
  'Никита Афанасьев',
  'Иван Козин',
  'Полина Петрова',
  'Владимир Смирнов',
  'Ольга Новикова',
  'София Борисова'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomNumberavatars = () => getRandomInteger(1, 6);
const getRandomNumberLikes = () => getRandomInteger(15, 200);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let photoId = 1;
let photoUrl = 1;
let commentsId = 0;
// eslint-disable-next-line no-unused-vars
const descriptionPhotos = () => ({
  id: photoId++,
  // eslint-disable-next-line prefer-template
  url: 'photos/' + photoUrl++ + '.jpg',
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumberLikes(),
  comments: [{
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
    id: commentsId++,
    // eslint-disable-next-line prefer-template
    avatar: 'img/avatar-' + getRandomNumberavatars() + '.svg',
  }]
});

const comments = Array.from({length: 25}, descriptionPhotos);

// eslint-disable-next-line no-console
console.log(comments);
