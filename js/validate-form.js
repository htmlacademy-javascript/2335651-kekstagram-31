import {checkLengthComment, checkHashtags, checkLengthHashtags, checkRepeatHashtags} from './functions-validate-form.js';
import {onEffectChengePicture} from './slider.js';
import {addScaling} from './scale-control.js';
import {onBigPictureEscKeydown} from './open-modal.js';

const imgEditorForm = document.querySelector('.img-upload__form');
const uploadImg = document.querySelector('.img-upload__input');
const editorImg = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const textComment = imgEditorForm.querySelector('.text__description');
const textHashtags = imgEditorForm.querySelector('.text__hashtags');
const effectsList = document.querySelector('.effects__list');
const imgUploadCancell = document.querySelector('.img-upload__cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreview = document.querySelector('.img-upload__preview');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const containerSliderElement = document.querySelector('.img-upload__effect-level');

const pristine = new Pristine(imgEditorForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});


uploadImg.addEventListener('change', (evt) => {
  if (evt.target.value) {
    editorImg.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', onBigPictureEscKeydown);
  }
});

imgUploadCancell.addEventListener('click', () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgEditorForm.reset();
  uploadPreview.style.filter = 'none';
  uploadPreviewImg.style.transform = 'none';
  sliderElement.classList.add('hidden');
  containerSliderElement.classList.add('hidden');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
});


pristine.addValidator(
  textComment,
  checkLengthComment,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  checkHashtags,
  'Введён невалидный хэштег'
);

pristine.addValidator(
  textHashtags,
  checkLengthHashtags,
  'Превышено количество хэштегов'
);

pristine.addValidator(
  textHashtags,
  checkRepeatHashtags,
  'Хэштеги повторяются'
);

imgEditorForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

addScaling();

effectsList.addEventListener('change', onEffectChengePicture);

textComment.addEventListener('keydown', (evt) => evt.stopPropagation());
textHashtags.addEventListener('keydown', (evt) => evt.stopPropagation());


