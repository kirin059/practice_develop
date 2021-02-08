"use strict";

const input = document.querySelector(".writeList");
const btn = document.querySelector("button");
const li = document.querySelector(".showList");

// input에 값을 입력한다 = value
// button을 누른다 = onclick event
// list에 값이 생성된다
// input은 초기화된다

const todo = () => {
    btn.addEventListener("click", () => {
        let txt = input.value;

        if (txt.length < 1) {
            alert("내용을 입력해 주세요");
            return;
        } else {
            let newList = document.createElement("li");
            newList.innerHTML = `${txt} <button class="delBtn">❌</button>`;
            li.appendChild(newList);
            input.value = "";
        }

        // 삭제 버튼 누르면 리스트 삭제
        const delBtn = document.querySelector(".delBtn");

        delBtn.addEventListener("click", function (e) {
            //console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove(e.target.parentElement);
        });
    });
};
todo();

// 엔터 치면 리스트 생성
// input.addEventListener("keypress", (e) => {
//     //console.log(e.keyCode);
//     if (e.keyCode === 13) {
//         todo();
//     }
//     return;
// });
