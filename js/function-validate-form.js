const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const checkValidateHashtags = (value) => {
  const arrHashtags = value.split(' ');

  for (let i = 0; i < arrHashtags.length; i++) {
    const validateHashtags = HASHTAG.test(arrHashtags[i]);
    if (!validateHashtags) {
      return false;
    }
  }
  return true;
};

const checkLengtHashtags = (value) => {
  const arrHashtags = value.split(' ');

  if (arrHashtags.length > 5) {
    return false;
  }
  return true;
};

const checkRepeatHashtags = (value) => {
  const arrHashtags = value.split(' ');

  for (let i = 0; i < arrHashtags.length; i++) {
    if (arrHashtags[i + 1] === arrHashtags[i]) {
      return false;
    }
  }
  return true;
};

const validateComments = (value) => value.length <= 140;

export{validateComments, checkValidateHashtags, checkLengtHashtags, checkRepeatHashtags};
