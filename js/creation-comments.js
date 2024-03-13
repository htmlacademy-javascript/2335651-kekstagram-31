import {descriptionPhotos} from './mock-data.js';

const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentsList = document.querySelector('.social__comments');
const commentItem = commentsList.querySelector('li');
const commentAvatar = commentsList.querySelector('img');
const commentText = commentsList.querySelector('p');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const buttonLoaderComments = document.querySelector('.social__comments-loader');
commentsList.innerHTML = '';

const creationComments = () => {
  const generatesCommentsData = descriptionPhotos().comments;
  const pictureComment = commentItem.cloneNode(true);

  commentsList.append(pictureComment);
  commentItem.append(commentAvatar);
  commentItem.append(commentText);

  for (const obj of generatesCommentsData) {
    commentAvatar.src = obj.avatar;
    commentAvatar.alt = obj.name;
    commentText.textContent = obj.message;
  }


  commentShownCount.textContent = commentsList.childNodes.length;

  bigPictureCancel.addEventListener('click', () => {
    commentsList.innerHTML = '';
    buttonLoaderComments.classList.remove('hidden');
  });
};

export{creationComments};
