import {isEscapeKey} from './util';

const miniPicture = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

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
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

miniPicture.addEventListener('click', () => {
  openBigPicture();
});

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

export{onBigPictureEscKeydown};
