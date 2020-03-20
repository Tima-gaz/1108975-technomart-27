var link = document.querySelectorAll(".buy");
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

for(var i=0;i<link.length;i++){
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.add("modal-show");
    amount = amount + 1;   
  document.getElementById('order-count').innerHTML = amount;
    
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