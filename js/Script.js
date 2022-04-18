// feedback
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


// Modal
const mapOpen = document.querySelector('.min-map');
const mapModal = document.querySelector('.modal-map');
const mapClose = mapModal.querySelector('.button-close-map');

mapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('display-none');
});

mapClose.addEventListener('click', function () {
  mapModal.classList.add('display-none');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape')
    mapModal.classList.add('display-none');
});

// Slider

let offset = 0;
const sliderLine = document.querySelector('.main-slider');
const sliderNext = document.querySelector('.next-slider');
const sliderBack = document.querySelector('.back-slider');
const sliderDotsOne = document.querySelector('.item-dots-one');
const sliderDotsTwo = document.querySelector('.item-dots-two');

sliderNext.addEventListener('click', function (evt) {
  offset += 270;
  evt.preventDefault();
  if (offset > 270) {
    offset = 0;
  };
  sliderLine.style.bottom = offset + 'px';
  sliderDotsOne.classList.toggle('background-dots');
  sliderDotsTwo.classList.toggle('background-dots');
});

sliderBack.addEventListener('click', function (evt) {
  offset -= 270;
  evt.preventDefault();
  if (offset < -269) {
    offset = 270;
  };
  sliderLine.style.bottom = offset + 'px';
  sliderDotsOne.classList.toggle('background-dots');
  sliderDotsTwo.classList.toggle('background-dots');
});

sliderDotsTwo.addEventListener('click', function (evt) {
  offset += 270;
  evt.preventDefault();
  if (offset > 270) {
    offset = 0;
  };
  sliderLine.style.bottom = offset + 'px';
  sliderDotsOne.classList.toggle('background-dots');
  sliderDotsTwo.classList.toggle('background-dots');
});

sliderDotsOne.addEventListener('click', function (evt) {
  offset -= 270;
  evt.preventDefault();
  if (offset < -269) {
    offset = 270;
  };
  sliderLine.style.bottom = offset + 'px';
  sliderDotsOne.classList.toggle('background-dots');
  sliderDotsTwo.classList.toggle('background-dots');
});


//  modal basket

const buttonParents = document.querySelector('.popular-goods-list');
const modalAddGood = document.querySelector('.modal-basket');
const buttonAddGood = document.querySelector('.button-add-goods');
const buttonClose = modalAddGood.querySelector('.icon-close');
const buttonNextOffer = modalAddGood.querySelector('.button-next-offer');


buttonParents.addEventListener('click', function (evt) {
  if (evt.target.closest('.button-add-goods')) {
    evt.preventDefault();
    modalAddGood.classList.remove('display-none');
  }
});

buttonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddGood.classList.add('display-none');
});

buttonNextOffer.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddGood.classList.add('display-none');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    modalAddGood.classList.add('display-none');
  };
});

//slider service

const buttonDelivery = document.querySelector('.service-button-delivery');
const buttonWarranty = document.querySelector('.service-button-warranty');
const buttonCredit = document.querySelector('.service-button-credit');

const slideDelivery = document.querySelector('.service-slider-item-one');
const slideWarranty = document.querySelector('.service-slider-item-two');
const slideCredit = document.querySelector('.service-slider-item-three');

buttonDelivery.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideDelivery.classList.add('current');
  slideCredit.classList.remove('current');
  slideWarranty.classList.remove('current');
})

buttonWarranty.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideWarranty.classList.add('current');
  slideDelivery.classList.remove('current');
  slideCredit.classList.remove('current');
})

buttonCredit.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideCredit.classList.add('current');
  slideDelivery.classList.remove('current');
  slideWarranty.classList.remove('current');
})
