/*sub1.js*/
const stepA = document.querySelectorAll(".step1>ul>li>a");

stepA.forEach((a,index) => {
  a.addEventListener("click",e=>{
    e.preventDefault();
    stepA.forEach((a,index)=>{
      a.style.backgroundColor=`transparent`;
      a.style.backgroundImage = `url(images/ico_inquiry_0${index+1}.png)`;
    });
      a.style.backgroundColor=`#043285`;
      a.style.backgroundImage = `url(images/ico_inquiry_on_0${index+1}.png)`;
  })
});