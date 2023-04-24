/*common.js*/ 
window.addEventListener(`load`, () => {
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const btnSrch = document.querySelector(".btn_srch");
const srchWrap = document.querySelector(".srch_wrap");
const srchClose = document.querySelector(".btn_srch_close");
const headerWrap = document.querySelector(".header_wrap");

/*주메뉴*/
// 각 li에 마우스를 올리면 (높이값 가져와서)풀다운 메뉴 내려오고 보여야 됨
// 키보드 탭으로 움직여야됨.
gnbMenu.forEach((li,index) => {
  li.addEventListener("mouseover", () => {
    gnbMenu.forEach((li) => {
      li.querySelector("div").style.display = "none";
    });
    li.querySelector("div").style.display = "block";
    headerWrap.style.height = `${li.querySelector("div").offsetHeight+70}px`;
  });
  li.children[0].addEventListener("focusin", () => {  //foucs는 a링크에다가 해줘야 적용된다
    gnbMenu.forEach((li) => {
      li.querySelector("div").style.display = "none";
    });
    li.querySelector("div").style.display = "block";
    headerWrap.style.height = `${li.querySelector("div").offsetHeight+70}px`;
  });

  li.addEventListener("mouseout", e => {
    e.preventDefault();
    gnbMenu.forEach((li) => {
      li.querySelector("div").style.display = "none";
    });
    headerWrap.style.height = "70px";
  });

  li.children[0].addEventListener("blur", e => {
    e.preventDefault();
    gnbMenu.forEach((li) => {
      li.querySelector("div").style.display = "none";
    });
    headerWrap.style.height = "70px";
  });
});

/*검색박스*/
// 검색버튼 누르면 검색박스 보이고
// 닫기버튼 누르면 검색박스 안보이고

btnSrch.addEventListener(("click"), e => {
  e.preventDefault();
  srchWrap.style.display = "block"
});
srchClose.addEventListener(("click"), e => {
  e.preventDefault();
  srchWrap.style.display = "none"
});

// top버튼
// 클릭하면 스크롤이 맨위로 올라감
const topBtn = document.querySelector(".btn_top");
// console.log(topBtn);

topBtn.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  })
});

// 스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
window.addEventListener("scroll", () =>{
  // let scroll = document.querySelector('html').scrollTop; //스크롤 값을 가져온다
  let scroll = window.pageYOffset;
  // console.log(scroll);

  if(scroll<=0) {
    topBtn.classList.remove("on","ab");
  }
  else if(scroll>2700) {
    topBtn.classList.add("on","ab");
  }
  else {  //1~2699사이
    topBtn.classList.remove("ab");
    topBtn.classList.add("on");
  }
});

})

