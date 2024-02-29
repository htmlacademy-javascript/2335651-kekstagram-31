import {getRandomNumberavatars, getRandomNumberLikes, getRandomArrayElement} from './util.js';

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

let photoId = 1;
let photoUrl = 1;
let commentsId = 0;

const descriptionPhotos = () => ({
  id: photoId++,
  url: `photos/${ photoUrl++ }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumberLikes(),
  comments: [{
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
    id: commentsId++,
    avatar: `img/avatar-${ getRandomNumberavatars() }.svg`,
  }]
});

const generatesDescriptions = () => Array.from({length: 25}, descriptionPhotos);

export {generatesDescriptions};
