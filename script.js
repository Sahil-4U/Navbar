const navbarEl=document.querySelector('.navbar');
const bottomContainerEl=document.querySelector('.bottom-container');

window.addEventListener("scroll",()=>{
  if(window.scrollY > bottomContainerEl.offsetTop-navbarEl.offsetHeight-10){
    // console.log(bottomContainerEl.offsetTop+"ye to bottom container ka top");
    // console.log(navbarEl.offsetHeight+"ye h navbar ki height");
    // console.log(window.scrollY +'ye h vo point jha dono mile')
    navbarEl.classList.add("active");
  }else{
    navbarEl.classList.remove("active");
  }
})