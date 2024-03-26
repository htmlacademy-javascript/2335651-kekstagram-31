
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');

const closeSuccessMessage = (template, button) => {
  button.addEventListener('click', () => template.remove());
  template.addEventListener('click', (evt) => {
    if (evt.target.className === 'success' || evt.target.className === 'error') {
      template.remove();
    }
  });
};

const getData = (onSuccess) => {
  fetch(' https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      onSuccess(data);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch ('https://31.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        document.body.append(successTemplate);
        closeSuccessMessage(successTemplate, successButton);
      } else {
        document.body.append(errorTemplate);
        closeSuccessMessage(errorTemplate, errorButton);
        onFail();
      }
    })
    .catch(() => {
      document.body.append(errorTemplate);
      closeSuccessMessage(errorTemplate, errorButton);
      onFail();
    });
};

export{getData, sendData, closeSuccessMessage};
