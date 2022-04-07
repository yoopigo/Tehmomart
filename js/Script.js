const feedBack = document.querySelector('.button-usual');
const feedBackPopup = document.querySelector('.modal-feedback');
const closePopup = feedBackPopup.querySelector('.button-close-feedback');
const feedBackForm = feedBackPopup.querySelector('.modal-feedback-form');
const feedBackEmail = feedBackPopup.querySelector('.modal-email-input');
const feedBackText = feedBackPopup.querySelector('.modal-text-area');
const feedBackLogin = feedBackPopup.querySelector('.modal-login-input');



feedBack.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedBackPopup.classList.toggle('display-none');
  feedBackLogin.focus();
  if (Storage) {
    feedBackLogin.value = localStorage.getItem('login');
    feedBackEmail.focus();
  };
  if (Storage) {
    feedBackEmail.value = localStorage.getItem('email');
    feedBackText.focus;
  }
  feedBackText.value = localStorage.getItem('textArea');
});

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedBackPopup.classList.add('display-none');
  feedBackForm.classList.remove('error');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    feedBackPopup.classList.add('display-none');
    feedBackForm.classList.remove('error');
  }
});

feedBackForm.addEventListener('submit', function (evt) {
  if (!feedBackEmail.value || !feedBackText.value || !feedBackLogin.value) {
    evt.preventDefault();
    feedBackForm.classList.remove('error');
    feedBackForm.offsetWidth = feedBackForm.offsetWidth;
    feedBackForm.classList.add('error');
  } else {
    localStorage.setItem('login', feedBackLogin.value);
    localStorage.setItem('email', feedBackEmail.value);
    localStorage.setItem('textArea', feedBackText.value);
  }
});


/* Animations */
