import {descriptionPhotos} from './mock-data.js';

const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsList = document.querySelector('.social__comments');
const commentItem = commentsList.querySelector('li');
const commentAvatar = commentsList.querySelector('img');
const commentText = commentsList.querySelector('p');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
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

  commentTotalCount.textContent = commentsList.childNodes.length;
  commentShownCount.textContent = commentsList.childNodes.length;

  bigPictureCancel.addEventListener('click', () => {
    commentsList.innerHTML = '';
  });
};

export{creationComments};
