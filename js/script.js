const btnMenu = document.querySelector(".header__menu-icon");
if(btnMenu){
   const menu = document.querySelector(".header__menu");
   btnMenu.addEventListener("click",(e)=>{
      btnMenu.classList.toggle("_active");
      menu.classList.toggle("_open");
   })
}