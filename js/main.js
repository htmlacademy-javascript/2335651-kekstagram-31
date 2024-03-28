import {сreatePicture} from './сreation-picture.js';
import {onBigPictureCreate} from './creation-big-picture.js';
import './open-modal.js';
import './validate-form.js';
import {getData} from './api.js';

getData((data) => {
  сreatePicture(data);
  onBigPictureCreate(data);
});
