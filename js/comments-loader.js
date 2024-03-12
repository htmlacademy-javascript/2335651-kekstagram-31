import {creationComments} from './creation-comments.js';

const buttonLoaderComments = document.querySelector('.social__comments-loader');
const commentsList = document.querySelector('.social__comments');

const commentsLoader = () => {
  buttonLoaderComments.addEventListener ('click', () => {
    const commentsLoaderArr = Array.from({length: 5}, creationComments);
    for (let i = 0; i < commentsLoaderArr.length; i++) {
      commentsList.appendChild(commentsLoaderArr[i]);
    }
  });
};


export{commentsLoader};
