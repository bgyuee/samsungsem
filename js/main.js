//main.js

/* 오토배너 */
const nextBtn = document.querySelector(".btn_next");
const prevBtn = document.querySelector(".btn_prev");
const slides = document.querySelectorAll(".slide_wrap>li");
const slideRolls = document.querySelectorAll(".slide_roll>ul>li");
const slideLength = slides.length-1;
let slideIndex = 0;

// next 버튼
// li.slide.active 클래스 "active"
// .slide_roll>ul>li.on>a li에 클래스 "on"
nextBtn.addEventListener("click", e => {
  e.preventDefault();
  slideIndex++;
  if(slideIndex>slideLength) slideIndex = 0;
  banner(slideIndex);
});

// prev버튼
prevBtn.addEventListener("click", e => {
  e.preventDefault();
  slideIndex--;
  if(slideIndex<0) slideIndex = slideLength;
  banner(slideIndex);
});

function banner(i) {
  slides.forEach((li,index) => {
    li.classList.remove("active","on");
    slideRolls[index].classList.remove("on");
  });
  slides[i].classList.add("active","on");
  slideRolls[i].classList.add("on");
}

// 오토배너 5초마다
function autoBanner() {
    slideIndex++;
    if(slideIndex>slideLength) slideIndex = 0;
    banner(slideIndex);
    autoBnn = setTimeout(autoBanner,5000); //재귀함수
}

let autoBnn = setTimeout(autoBanner,5000);//최초호출
const btnPlay = document.querySelector(".btn_play");
let flag = 0;

// 배너 재생 멈춤 버튼
// 배너 멈추고 이미지 바뀌고
// 배너 재생  이미지 바뀌고
btnPlay.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if(flag == 0) {
    clearTimeout(autoBnn);
    flag = 1;
  }
  else {
    autoBnn = setTimeout(autoBanner,5000);
    flag = 0;
  }
});

// 롤링버튼클릭
// 해당 배너로 이동
slideRolls.forEach((li,index) => {
  li.addEventListener("click", e => {
    e.preventDefault();
    banner(index);
  });
});



