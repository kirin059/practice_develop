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
