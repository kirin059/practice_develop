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

// 이메일 입력란에 naver.com만 가능한 validation 기능 적용
id.addEventListener("input", function (e) {
    //console.log(e.target.value);
    const value = e.target.value;
    if (value.indexOf("naver.com") < 0) {
        id.classList.add("error");
    } else {
        id.classList.remove("error");
    }
});
