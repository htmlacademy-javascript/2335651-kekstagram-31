import './mock-data.js';
import {сreationPicture} from './сreation-picture.js';
import './open-modal.js';
import {createBigPicture} from './creation-big-picture.js';
import {commentsLoader} from './comments-loader.js';
import {generatesDescriptions} from './mock-data.js';

const picturesData = generatesDescriptions();

сreationPicture(picturesData);
createBigPicture(picturesData);
commentsLoader();
