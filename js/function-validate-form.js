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

const checkLengthHashtags = (value) => {
  const arrHashtags = value.split(' ');

  if (arrHashtags.length > 5) {
    return false;
  }
  return true;
};

const checkRepeatHashtags = (value) => {
  const arrHashtags = value.split(' ');

  for (let i = 0; i < arrHashtags.length - 1; i++) {
    const currentHashtag = arrHashtags[i];

    for (let j = i + 1; j < arrHashtags.length; j++) {
      currentHashtag.localeCompare(arrHashtags[j]);

      if (currentHashtag.localeCompare(arrHashtags[j]) === 0) {
        return false;
      }
    }
  }
  return true;
};

const checkLengthComment = (value) => value.length <= 140;

export{checkLengthComment, checkValidateHashtags, checkLengthHashtags, checkRepeatHashtags};
