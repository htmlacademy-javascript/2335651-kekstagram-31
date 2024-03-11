import {generatesDescriptions} from './mock-data';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const сreationPicture = () => {
  const generatesPictureData = generatesDescriptions();
  const pictureListFragment = document.createDocumentFragment();

  generatesPictureData.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = url;
    pictureImg.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.append(pictureElement);
  });

  pictureList.append(pictureListFragment);
};

export{сreationPicture};
