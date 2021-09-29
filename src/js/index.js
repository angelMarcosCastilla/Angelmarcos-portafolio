
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

const saveThemeLocalStorage = () => {
  !document.body.classList.contains("dark")
  ? localStorage.setItem("themeAM", "dark")
  : localStorage.removeItem("themeAM")
}

const changeTheme = () => {
  $swtichtoggle.classList.toggle("toggle-switch--active")
  document.body.classList.toggle("dark")
}

const $swtichtoggle = document.getElementById("switch");



addEventListener("click", (e) => {
  if(e.target.closest(".switch")){ 
    saveThemeLocalStorage();
    changeTheme()
  }
  
})


addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("themeAM")){
    document.body.classList.add("dark")
    $swtichtoggle.classList.add("toggle-switch--active")
    
  }
  menuToggle("menu-icon", "menu");
})