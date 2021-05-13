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



// TESTIMONIAL SECTION -- Switching person info on click
window.addEventListener('click', function(e) {
  //// Left Side
  if (document.getElementById('test-left').contains(e.target)) {
    let tempName = document.getElementById('left-name').innerHTML;
    let tempDetail = document.getElementById('left-user-detail').innerHTML;
    let tempAvatar = document.getElementById('left-image').style.backgroundImage;
    let tempTesti = document.getElementById('left-testimonial').innerHTML;
    document.getElementById('left-name').innerHTML = document.getElementById('user-name').innerHTML;
    document.getElementById('left-image').style.backgroundImage = document.getElementById('user-avatar').style.backgroundImage;
    document.getElementById('left-user-detail').innerHTML = document.getElementById('user-detail').innerHTML;
    document.getElementById('left-testimonial').innerHTML = document.getElementById('user-testimonial').innerHTML;

    document.getElementById('user-name').innerHTML = tempName;
    document.getElementById('user-detail').innerHTML = tempDetail;
    document.getElementById('user-avatar').style.backgroundImage = tempAvatar;
    document.getElementById('user-testimonial').innerHTML = tempTesti;
  }
  //// Right Side
  if (document.getElementById('test-right').contains(e.target)) {
    let tempName = document.getElementById('right-name').innerHTML;
    let tempDetail = document.getElementById('right-user-detail').innerHTML;
    let tempAvatar = document.getElementById('right-image').style.backgroundImage;
    let tempTesti = document.getElementById('right-testimonial').innerHTML;
    document.getElementById('right-name').innerHTML = document.getElementById('user-name').innerHTML;
    document.getElementById('right-image').style.backgroundImage = document.getElementById('user-avatar').style.backgroundImage;
    document.getElementById('right-user-detail').innerHTML = document.getElementById('user-detail').innerHTML;
    document.getElementById('right-testimonial').innerHTML = document.getElementById('user-testimonial').innerHTML;

    document.getElementById('user-name').innerHTML = tempName;
    document.getElementById('user-detail').innerHTML = tempDetail;
    document.getElementById('user-avatar').style.backgroundImage = tempAvatar;
    document.getElementById('user-testimonial').innerHTML = tempTesti;
  }

}


)
