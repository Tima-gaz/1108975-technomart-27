var link = document.querySelector(".letter-button");
  
var popup = document.querySelector(".modal-letter");
var close = popup.querySelector(".modal-close");
  
var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=text]");
  
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

  try {
    storageName = localStorage.getItem("user-name");
  } catch (err) {
    isStorageSupport = false;
  }

  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    textarea.value = "";
      
    if (storageName) {
      login.value = storageName;
      email.focus();
        if(storageEmail){
            email.value = storageEmail
            textarea.focus();}
    } else {
        
      login.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    textarea.value = ""
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !textarea.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);  
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });


var orderLink = document.querySelectorAll(".buy");
var order = document.querySelector(".modal-order");
var close1 = order.querySelector(".modal-close");
var close2 = order.querySelector(".close");
var buttonColor = document.querySelector(".cart-button");
var count = document.querySelector("cart-button-count");
var amount = count;
var storageCount = count;

 try {
    storageCount = localStorage.getItem("cart-button");
  } catch (err) {
    isStorageSupport = false;
  }

 if (storageCount) {
      count = storageCount;
    }

for(var i=0;i<orderLink.length;i++){
  orderLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.add("modal-show");
    amount = amount + 1;   
  document.getElementById("order-count").innerHTML = amount;
    
    if (amount){
      buttonColor.classList.add("cart-button-red");
       count.classList.add("cart-button-red"); 
    }  
     if (isStorageSupport) {
        localStorage.setItem("count", count);}
  })



  close1.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("modal-show");
    
  });

 close2.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("modal-show");
    
  });
    
}


 var mapLink = document.querySelector(".google-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });

var delivery = document.querySelector("[for=delivery]");
var warranty = document.querySelector("[for=warranty]");
var credit = document.querySelector("[for=credit]");
var deliveryInput = document.querySelector("[id=delivery]");
var warrantyInput = document.querySelector("[id=warranty]");
var creditInput = document.querySelector("[id=credit]");
var sliderDelivery = document.querySelector(".slider-delivery");
var sliderWarranty = document.querySelector(".slider-warranty");
var sliderCredit = document.querySelector(".slider-credit");

if (deliveryInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
   
};

if (warrantyInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
  
};

if (creditInput.hasAttribute("checked")){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
  
};

 warrantyInput.addEventListener("click", function (evt) {
    evt.preventDefault();
    
   warrantyInput.setAttribute("checked", true);
   creditInput.removeAttribute("checked");
   deliveryInput.removeAttribute("checked");
     if (deliveryInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
   
};

if (warrantyInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
     delivery.classList.remove("label-color");
    warranty.classList.add("label-color");
    credit.classList.remove("label-color");
};

if (creditInput.hasAttribute("checked")){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
};
  });

 deliveryInput.addEventListener("click", function (evt) {
    evt.preventDefault();
    
   deliveryInput.setAttribute("checked", true);
   creditInput.removeAttribute("checked");
   warrantyInput.removeAttribute("checked");
     if (deliveryInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
    delivery.classList.add("label-color");
    warranty.classList.remove("label-color");
    credit.classList.remove("label-color");
};

if (warrantyInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
};

if (creditInput.hasAttribute("checked")){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
};
  });


 creditInput.addEventListener("click", function (evt) {
    evt.preventDefault();
    
   creditInput.setAttribute("checked", true);
   deliveryInput.removeAttribute("checked");
   warrantyInput.removeAttribute("checked");
     if (deliveryInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderDelivery.classList.remove("display-none");
           
};

if (warrantyInput.hasAttribute("checked")){
    sliderCredit.classList.add("display-none");
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.remove("display-none");
};

if (creditInput.hasAttribute("checked")){
    sliderDelivery.classList.add("display-none");
    sliderWarranty.classList.add("display-none");
    sliderCredit.classList.remove("display-none");
    delivery.classList.remove("label-color");
    warranty.classList.remove("label-color");
    credit.classList.add("label-color");
    
};
  });
