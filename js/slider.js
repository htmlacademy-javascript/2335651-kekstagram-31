const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview');
const containerSliderElement = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value)
      ? value.toFixed(0)
      : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

const effectMarvin = {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1
};

const effectPhobos = {
  range: {
    min: 0,
    max: 3
  },
  start: 3,
  step: 0.1
};

const effectHeat = {
  range: {
    min: 1,
    max: 3
  },
  start: 3,
  step: 0.1
};

sliderElement.classList.add('hidden');
containerSliderElement.classList.add('hidden');

const onEffectChengePicture = (evt) => {

  const effect = evt.target.value;

  if (effect === 'marvin') {
    sliderElement.noUiSlider.updateOptions(effectMarvin);
  } else if (effect === 'phobos') {
    sliderElement.noUiSlider.updateOptions(effectPhobos);
  } else if (effect === 'heat') {
    sliderElement.noUiSlider.updateOptions(effectHeat);
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }

  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();

    if (effect === 'chrome') {
      imgPreview.style.filter = `grayscale(${effectLevelValue.value})`;
    } else if (effect === 'sepia') {
      imgPreview.style.filter = `sepia(${effectLevelValue.value})`;
    } else if (effect === 'marvin') {
      imgPreview.style.filter = `invert(${effectLevelValue.value}%)`;
    } else if (effect === 'phobos') {
      imgPreview.style.filter = `blur(${effectLevelValue.value}px)`;
    } else if (effect === 'heat') {
      imgPreview.style.filter = `brightness(${effectLevelValue.value})`;
    }
  });

  if (effect === 'none') {
    imgPreview.style.filter = 'none';
    sliderElement.classList.add('hidden');
    containerSliderElement.classList.add('hidden');
  } else {
    sliderElement.classList.remove('hidden');
    containerSliderElement.classList.remove('hidden');
  }
};

export{onEffectChengePicture};
