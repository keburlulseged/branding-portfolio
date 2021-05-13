let menuBtn = document.getElementsByClassName("menu-button");
let mobileMenu = document.getElementsByClassName("mobile-menu");

menuBtn[0].addEventListener("click", () => {
  mobileMenu[0].classList.toggle("active");
});
mobileMenu[0].addEventListener("click", () => {
  mobileMenu[0].classList.toggle("active");
});

window.addEventListener('click', function(e){
  if (!document.getElementById('mobile-menu').contains(e.target) && (!document.getElementById('menu-button').contains(e.target))){
  mobileMenu[0].classList.toggle("active"); //the same code you've used to hide the menu
}
})
console.log(menuBtn[0]);
