const buttonParents=document.querySelector(".catalog-goods-list"),modalAddGood=document.querySelector(".modal-basket"),buttonAddGood=document.querySelector(".button-add-goods"),buttonClose=modalAddGood.querySelector(".icon-close"),buttonNextOffer=modalAddGood.querySelector(".button-next-offer");buttonParents.addEventListener("click",function(o){o.target.closest(".button-add-goods")&&(o.preventDefault(),modalAddGood.classList.remove("display-none"))}),buttonClose.addEventListener("click",function(o){o.preventDefault(),modalAddGood.classList.add("display-none")}),buttonNextOffer.addEventListener("click",function(o){o.preventDefault(),modalAddGood.classList.add("display-none")}),document.addEventListener("keydown",function(o){"Escape"===o.key&&modalAddGood.classList.add("display-none")});