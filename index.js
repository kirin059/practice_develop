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
