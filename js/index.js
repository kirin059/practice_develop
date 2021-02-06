"use strict";

// modal
const openBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modalOverlay");
const closeBtn = modal.querySelector(".closeModal");

const openModal = () => {
    modal.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
};
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// log-in
const btn = document.querySelector(".loginBtn");
const id = document.querySelector(".userId");
const pw = document.querySelector(".userPw");

document.addEventListener("keyup", function () {
    if (id.value.includes("@") && pw.value.length > 5) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
});

btn.addEventListener("click", function () {
    location.href = "calendar.html";
});
