var delivery = document.querySelector("[for=delivery]");
var warranty = document.querySelector("[for=warranty]");
var credit = document.querySelector("[for=credit]");
var deliveryInput = document.querySelector("[id=delivery]");
var warrantyInput = document.querySelector("[id=warranty]");
var creditInput = document.querySelector("[id=credit]");
var sliderDelivery = document.querySelector(".slider-delivery");
var sliderWarranty = document.querySelector(".slider-warranty");
var sliderCredit = document.querySelector(".slider-credit");

if (deliveryInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
   
};

if (warrantyInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
  
};

if (creditInput.hasAttribute('checked')){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
  
};

 warrantyInput.addEventListener("click", function (evt) {
    evt.preventDefault();
    
   warrantyInput.setAttribute('checked', true);
   creditInput.removeAttribute('checked');
   deliveryInput.removeAttribute('checked');
     if (deliveryInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
   
};

if (warrantyInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
     delivery.classList.remove("label-color");
    warranty.classList.add("label-color");
    credit.classList.remove("label-color");
};

if (creditInput.hasAttribute('checked')){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
};
  });

 deliveryInput.addEventListener("click", function (evt) {
    evt.preventDefault();
    
   deliveryInput.setAttribute('checked', true);
   creditInput.removeAttribute('checked');
   warrantyInput.removeAttribute('checked');
     if (deliveryInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
    delivery.classList.add("label-color");
    warranty.classList.remove("label-color");
    credit.classList.remove("label-color");
};

if (warrantyInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
};

if (creditInput.hasAttribute('checked')){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
};
  });


 creditInput.addEventListener("click", function (evt) {
    evt.preventDefault();
    
   creditInput.setAttribute('checked', true);
   deliveryInput.removeAttribute('checked');
   warrantyInput.removeAttribute('checked');
     if (deliveryInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
           
};

if (warrantyInput.hasAttribute('checked')){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
};

if (creditInput.hasAttribute('checked')){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
    delivery.classList.remove("label-color");
    warranty.classList.remove("label-color");
    credit.classList.add("label-color");
    
};
  });


