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
        btn.addEventListener("click", function () {
            location.href = "main.html";
        });
    } else {
        btn.classList.remove("active");
        btn.removeEventListener("click", function () {
            location.href = "main.html";
        });
    }
});

// clock
const clock = document.querySelector(".clock");

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const init = () => {
    getTime();
    setInterval(getTime, 1000);
};
init();
