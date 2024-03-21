import {isEscapeKey} from './util.js';
import {loadCommentsPartly} from './picture-comments.js';

const miniPicture = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');
const imgUploadCancell = document.querySelector('.img-upload__cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');

const onBigPictureEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onBigPictureEscKeydown);
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsList.innerHTML = '';
  buttonLoaderComments.classList.remove('hidden');
  buttonLoaderComments.removeEventListener ('click', loadCommentsPartly);

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

miniPicture.addEventListener('click', () => {
  openBigPicture();
});

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

imgUploadCancell.addEventListener('click', () => {
  closeBigPicture();
  imgUploadInput.value = '';
});

export{closeBigPicture};