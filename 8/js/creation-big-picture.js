import {descriptionPhotos} from './mock-data.js';
import {creationComments} from './creation-comments.js';

const bigPictureImg = document.querySelector('.big-picture__img img');
const miniPicture = document.querySelector('.pictures');
const bigPictureLikes = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');


const creationBigPicture = () => {
  miniPicture.addEventListener('click', (evt) => {
    const dataPictureImg = evt.target;
    bigPictureLikes.textContent = dataPictureImg.nextElementSibling.childNodes[3].textContent;
    bigPictureImg.src = dataPictureImg.src;
    socialCaption.textContent = descriptionPhotos().description;

    creationComments();
  });
};


export{creationBigPicture};
