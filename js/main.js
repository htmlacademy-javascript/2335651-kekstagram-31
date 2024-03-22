import './mock-data.js';
import {сreatePicture} from './сreation-picture.js';
import './open-modal.js';
import {createBigPicture} from './creation-big-picture.js';
import {generatesDescriptions} from './mock-data.js';
import './validate-form.js';
import {changeScale} from './scale-control.js';

const picturesData = generatesDescriptions();

сreatePicture(picturesData);
createBigPicture(picturesData);
changeScale();
