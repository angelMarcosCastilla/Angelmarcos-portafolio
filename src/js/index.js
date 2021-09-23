
const menuToggle = (idToggleMenu, idNavbar) => {
  const $menuIcon=document.getElementById(idToggleMenu);
  const $menu=document.getElementById(idNavbar);
    if($menuIcon && $menu){
      $menuIcon.addEventListener("click",()=>{
        $menu.classList.toggle("menu--active")
        $menuIcon.classList.toggle("menu__icon--active")
        
      })
  }
  }


menuToggle("menu-icon", "menu");