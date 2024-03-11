import {generatesDescriptions} from './mock-data.js';

const commentShownCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsList = document.querySelector('.social__comments');
const commentItem = commentsList.querySelector('li');
const commentAvatar = commentsList.querySelector('img');
const commentText = commentsList.querySelector('p');

const creationComments = () => {
  const generatesPicture = generatesDescriptions();
  commentsList.innerHTML = '';

  generatesPicture.forEach(({comments}) => {
    commentsList.append(commentItem);
    commentItem.append(commentAvatar);
    commentItem.append(commentText);

    for (const obj of comments) {
      commentAvatar.src = obj.avatar;
      commentAvatar.alt = obj.name;
      commentText.textContent = obj.message;
    }
    commentTotalCount.textContent = comments.length;
    commentShownCount.textContent = commentsList.childNodes.length;
  });
};

export{creationComments};
