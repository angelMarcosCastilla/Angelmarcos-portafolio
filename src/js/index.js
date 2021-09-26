
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

const $swtichtoggle = document.getElementById("switch");


menuToggle("menu-icon", "menu");

addEventListener("click", (e) => {
  if(e.target.closest(".switch")){
    $swtichtoggle.classList.toggle("toggle-switch--active")
    document.body.classList.toggle("dark")
  }
})