import {checkLengthComment, checkHashtags, checkLengthHashtags, checkRepeatHashtags} from './functions-validate-form.js';
import {onEffectChengePicture} from './slider.js';
import {addScaling} from './scale-control.js';

const imgEditorForm = document.querySelector('.img-upload__form');
const textComment = imgEditorForm.querySelector('.text__description');
const textHashtags = imgEditorForm.querySelector('.text__hashtags');
const effectsList = document.querySelector('.effects__list');

const pristine = new Pristine(imgEditorForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
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


