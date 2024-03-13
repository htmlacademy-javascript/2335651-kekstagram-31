import {creationComments} from './creation-comments.js';

const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsList = document.querySelector('.social__comments');

const commentsLoader = () => {
  buttonLoaderComments.addEventListener ('click', () => {
    const newCommentsCount = commentsList.childNodes;
    if (newCommentsCount.length + 5 >= commentTotalCount.textContent) {
      const expectedNumberComments = commentTotalCount.textContent - newCommentsCount.length;
      Array.from({length: expectedNumberComments}, creationComments);
      buttonLoaderComments.classList.add('hidden');
    } else {
      Array.from({length: 5}, creationComments);
    }
  });
};


export{commentsLoader};
