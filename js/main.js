// .prettier-ignore

// 댓글작성(input.value)
// 게시버튼(click event)
// 댓글창에 올라감(input.value)
// 댓글란 초기화('')

const input = document.querySelector(".write"); //댓글input
const btn = document.querySelector(".post"); //버튼
const list = document.querySelector(".cmt"); //쓴댓글 추가공간
const id = document.querySelector(".ids"); // 아이디 추가공간

btn.addEventListener("click", function () {
    let comment = document.createElement("li");
    comment.innerHTML = input.value;

    function addTextNode() {
        let nick = document.createElement("li");
        let nickName = document.createTextNode("myId0059");
        nick.appendChild(nickName);
        id.appendChild(nick);
    }
    if (input.value) {
        list.appendChild(comment);
        input.value = "";
        // list.removeChild(firstChild);
        addTextNode();
    }
});

const commentList = document.querySelector(".cmt");

// let nick = document.createElement("li");
// let nickName = document.createTextNode("bom");
// nick.innerHTML = document.body.insertBefore(nick, id);

// if (input.value) {
//     id.appendChild(nickName);
// }

// function addElement () {
//
//     var newLi = document.createElement("li");
//
//     var newContent = document.createTextNode("환영합니다!");
//
//     newLi.appendChild(newContent);

//     var currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newLi, currentDiv);
//   }

// const btn = document.getElementById("post"); //게시버튼
// const input = document.getElementById("write"); //댓글창
// const list = document.getElementById("commentList"); //쓴댓글 추가공간

// btn.addEventListener("click", function () {
//     console.log(input.value);
// });

// const cmBox = document.querySelector('.comments_list');
// const cmInput = document.querySelector('.comments_write input');  //댓글란
// const cmBtn = document.querySelector('.btn_comment');  //버튼

// cmBtn.addEventListener('click', cmPut = (e) => {
//     e.preventDefault();

//     const cm = document.createElement('li');
//     const cmTxt = document.createElement('p');
//     const id = document.createElement('strong');

//     const cmHeart = document.createElement('button');
//     cmHeart.className ='btn_heart btn_small btn_com';
//     id.className = 'user_id';

//     cmTxt.innerHTML = cmInput.value;
//     id.innerHTML = 'delheure29';

//     if(cmInput.value){
//         cmBox.appendChild(cm);
//         cm.appendChild(id);
//         cm.appendChild(cmTxt);
//         cm.appendChild(cmHeart);
//         cmInput.value = "";
//     }

// function clickButton() {

//     var cmt = document.createElement("li");
//     cmt.innerHTML = input.value;
//     list.appendChild(cmt);
//     input.value = "";
// }

// search box
const glass = document.querySelector(".glass");
const searchInput = document.querySelector(".searchText");

searchInput.addEventListener("keyup", function () {
    if (searchInput.value.length > -1) {
        glass.classList.add("disabled");
    } else {
        glass.classList.remove("disabled");
    }
});
