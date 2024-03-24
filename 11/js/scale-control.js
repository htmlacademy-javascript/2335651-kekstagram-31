const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview img');
const MAX_SCALE = 100;
const MIN_SCALE = 25;

const changeScale = () => {
  scaleControlSmaller.addEventListener('click', () => {
    const scaleValueInteger = parseInt(scaleControlValue.value, 10);

    if (scaleValueInteger > MIN_SCALE) {
      scaleControlValue.value = `${scaleValueInteger - 25 }%`;
      uploadPreview.style.transform = `scale(0.${parseInt(scaleControlValue.value, 10)})`;
    }
  });

  scaleControlBigger.addEventListener('click', () => {
    const scaleValueInteger = parseInt(scaleControlValue.value, 10);

    if (scaleValueInteger < MAX_SCALE) {
      scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + 25 }%`;
      uploadPreview.style.transform = `scale(0.${parseInt(scaleControlValue.value, 10)})`;
      if(parseInt(scaleControlValue.value, 10) === 100) {
        uploadPreview.style.transform = 'none';
      }
    }
  });
};

export{changeScale};
