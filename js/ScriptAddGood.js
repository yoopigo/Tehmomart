const buttonParents = document.querySelector('.catalog-goods-list');
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
