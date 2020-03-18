var link = document.querySelector(".buy");
var order = document.querySelector(".modal-order");
var close1 = order.querySelector(".modal-close");
var close2 = order.querySelector(".close");
var buttonColor = document.querySelector(".cart-button");
var count = document.getElementById("order-count").value;
var countColor = document.getElementById("order-count")


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.add("modal-show");
    
    var amount = count;
    amount = amount + 1;
    
  document.getElementById('order-count').value = amount;
//    count.innerHTML = amount;
    if (amount){
      buttonColor.classList.add("cart-button-red");
       countColor.classList.add("cart-button-red"); 
    }  
    
  })



  close1.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("modal-show");
    
  });

 close2.addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("modal-show");
    
  });