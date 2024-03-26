import {isEscapeKey, isEnterKey} from './util.js';
import {loadCommentsPartly} from './picture-comments.js';

const miniPictureOpenElement = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');
const uploadImg = document.querySelector('.img-upload__input');
const editorImg = document.querySelector('.img-upload__overlay');
const imgUploadCancell = document.querySelector('.img-upload__cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreview = document.querySelector('.img-upload__preview');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const containerSliderElement = document.querySelector('.img-upload__effect-level');
const imgEditorForm = document.querySelector('.img-upload__form');

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
  commentsList.innerHTML = '';
  buttonLoaderComments.classList.remove('hidden');
  buttonLoaderComments.removeEventListener ('click', loadCommentsPartly);

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

miniPictureOpenElement.addEventListener('click', (evt) => {
  if (evt.target.className === 'picture__img') {
    openBigPicture();
  }
});

miniPictureOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt) && evt.target.className === 'picture') {
    openBigPicture();
  }
});

bigPictureCancelElement.addEventListener('click', closeBigPicture);

bigPictureCancelElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
});

uploadImg.addEventListener('change', (evt) => {
  if (evt.target.value) {
    editorImg.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', onBigPictureEscKeydown);
  }
});

function closeForm () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgEditorForm.reset();
  uploadPreview.style.filter = 'none';
  uploadPreviewImg.style.transform = 'none';
  sliderElement.classList.add('hidden');
  containerSliderElement.classList.add('hidden');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

imgUploadCancell.addEventListener('click', () => {
  closeForm();
});

imgUploadCancell.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeForm();
  }
});

