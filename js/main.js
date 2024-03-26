import {сreatePicture} from './сreation-picture.js';
import {createBigPicture} from './creation-big-picture.js';
import './open-modal.js';
import {closeForm} from './open-modal.js';
import './validate-form.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './validate-form.js';

setUserFormSubmit(closeForm);
getData((data) => {
  сreatePicture(data);
  createBigPicture(data);
});
