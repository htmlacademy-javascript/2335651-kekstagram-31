import {descriptionPhotos} from './mock-data.js';
import {creationComments} from './creation-comments.js';

const bigPictureImg = document.querySelector('.big-picture__img img');
const miniPictures = document.querySelector('.pictures');
const bigPictureLikes = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');


const createBigPicture = (arr) => {
  miniPictures.addEventListener('click', (evt) => {
    console.log(evt.target);
    const dataPictureImg = evt.target;
    const imageId = dataPictureImg.getAttribute('data-id');
    const pictureDescription = arr.find(l => l.id === parseInt(imageId, 10));
    bigPictureLikes.textContent = pictureDescription.textContent;
    bigPictureImg.src = pictureDescription.src;
    socialCaption.textContent = descriptionPhotos().description;

    creationComments();
  });
};


export{createBigPicture};
