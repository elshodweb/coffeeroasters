const btnMenu = document.querySelector(".header__menu-icon");
if (btnMenu) {
   const menu = document.querySelector(".header__menu");
   btnMenu.addEventListener("click", (e) => {
      btnMenu.classList.toggle("_active");
      menu.classList.toggle("_open");
   })
}

const openModalButton = document.querySelector("._open-modal");
if (openModalButton) {
   openModalButton.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.classList.add("_active");
      const clouseModalButton = document.querySelectorAll("._clouse-modal");
      for (let index = 0; index < clouseModalButton.length; index++) {
         const btnClouse = clouseModalButton[index];
         btnClouse.addEventListener("click", () => {
            modal.classList.remove("_active");
         })
      }
   })
}