"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// WE HAVE TO USE QUERYSELECTORALL BECAUSE OTHERWISE IT WILL SHOW ONLY ONE SHOW MODEL HOWEVER IT IS ACTUALLY THREE.
// THIS IS ONE OF THE LIMITATION OF QUERYSELECTOR BECAUSE IT WILL ONLY SHOW THE FIRST SHOW MODEL.
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

// here we have created a seprate function which we have called in btnOpenModel
const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// here we have created a seprate function for closing . which we have used twice on overlay and btnCloseModel.
const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModel);

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// here we have said if the hidden class is missing and esc key is pressed the message should close.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
  }
});
