import {validateComments, checkValidateHashtags, checkLengtHashtags, checkRepeatHashtags} from './function-validate-form.js';

const imgEditorForm = document.querySelector('.img-upload__form');
const uploadImg = document.querySelector('.img-upload__input');
const editorImg = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const textComment = imgEditorForm.querySelector('.text__description');
const textHashtags = imgEditorForm.querySelector('.text__hashtags');

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
  }
});

pristine.addValidator(
  textComment,
  validateComments,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  checkValidateHashtags,
  'Введён невалидный хэштег'
);

pristine.addValidator(
  textHashtags,
  checkLengtHashtags,
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


textComment.addEventListener('keydown', (evt) => evt.stopPropagation());
textHashtags.addEventListener('keydown', (evt) => evt.stopPropagation());
