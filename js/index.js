/* DOM사용
const title = document.getElementById("title"); //ById, ByTagName ...
//DOM(document object module) HTML을 DOM 객체로 만들 수 있음
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = " Tasul";
console.dir(document);
*/
/*
const title = document.querySelector("#title"); //노드의 첫번째 자식을 반환함 (#id로 찾겠다 .class로 찾겠다...)
//DOM(document object module) HTML을 DOM 객체로 만들 수 있음
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = " Tasul";
console.dir(document);
*/
/* Event and Event Handler
function handleResize(){
    console.log ("I have been resized");
}

window.addEventListener("resize", handleResize); 
//윈도우 사이즈가 변경될 때 이 함수를 호출하자! handleResize()로 치면 지금 바로 호출됨

function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick); */

/* 조건문 if
if(10 === 5){ //=== 3개는 같다가 아니라, 같은지 확인하는 것
    console.log("hi");
} else if(10 === 10){
    console.log("ho");
} else {
    console.log("bi");
}

if( 20> 5 && "nico"==="nico"){ //and
    console.log("yes");
} else{
    console.log("no");
}

if(20< 5 || "dasol" ==="dasol"){  //or
    console.log("si");
} else{
    console.log("nope");
} */

/* 조건문 예시
const age = prompt("How old are you");

if(age > 18 && age < 21){
    console.log("You can drink but you should not")
} else if( age >= 21){
    console.log("You can")
} else {
    console.log("You can't")
}
*/

/* 클릭하며 색 바꿈
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)"; 
const OTHER_COLOR = "rgb(142, 68, 173)"; //왜인지 모르겠지만,,,, #말고 rgb로 해야 바뀜...
const OTHER_COLOR_SEC = "#16a085";


function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else if (currentColor === OTHER_COLOR) {
        title.style.color = OTHER_COLOR_SEC;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init(); */


//css가 할 일은 css가 하고 js는 로직 처리만
//원하는 부분에 class가 존재할 경우 버그생김
/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS) {  //!== 같지 않다
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
} 
function init() {
    title.addEventListener("click", handleClick);
}

init();
*/
//class name의 element class list를 이용하여 버그 수정
/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass) {  //! = not
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
} 
function init() {
    title.addEventListener("click", handleClick);
}

init(); */

//toggle을 이용하여 코드 단축
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();

