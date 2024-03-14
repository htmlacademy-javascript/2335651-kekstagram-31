
import {createComments} from './creation-comments.js';

const bigPictureImg = document.querySelector('.big-picture__img img');
const miniPictures = document.querySelector('.pictures');
const bigPictureLikes = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const commentTotalCount = document.querySelector('.social__comment-total-count');


const createBigPicture = (arr) => {
  miniPictures.addEventListener('click', (evt) => {
    const dataPictureImg = evt.target;
    const imageId = dataPictureImg.getAttribute('data-id');
    const pictureDescription = arr.find((element) => element.id === parseInt(imageId, 10));
    bigPictureLikes.textContent = pictureDescription.likes;
    bigPictureImg.src = pictureDescription.url;
    socialCaption.textContent = pictureDescription.description;
    commentTotalCount.textContent = pictureDescription.comments.length;

    Array.from({length: 5}, createComments);
  });
};


export{createBigPicture};
