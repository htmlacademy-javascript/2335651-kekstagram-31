
const bigPicture = document.querySelector('.big-picture__img');
const bigPictureImg = bigPicture.querySelector('img');
const miniPicture = document.querySelector('.pictures');


const addDataBigPicture = () => {
  miniPicture.addEventListener('click', (evt) => {
    const dataPicture = evt.target;
    bigPictureImg.src = dataPicture.src;
  });
};


export{addDataBigPicture};
