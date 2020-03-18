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