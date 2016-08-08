console.log('common.js says \'Hello\'.');

var body = document.getElementsByTagName("body")[0];
var modal = document.getElementsByClassName('l-modalRegister')[0];
var btn = document.getElementById("openModal");
var btnCloseModal = document.getElementById("modalBtnClose");
var modalForm = document.getElementById("modalRegisterForm");
var modalSuccess = document.getElementById("modalRegisterSuccess");
var close = document.getElementsByClassName("c-close-modal")[0];



//For example display purposes, to be deleted========

var showSuccess = document.getElementById("successExample");

showSuccess.onclick = function() {
  modalForm.style.display = "none";
  modalSuccess.style.display = "block";
}

//===================================================



btnCloseModal.onclick = function() {
  modal.style.display = "none";
}

btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

close.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "visible";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "visible";
    }
}