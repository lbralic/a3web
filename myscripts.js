// ////---------------------------
// * JavaScript/ Menu icon toggle/ Menu will appear/disappear on click with .active class in @media section 
// * Inspired: W3S https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// * Owner : Kevin VD
// * Date  : Nov 23 (v1)
// -----------------------------//////

const toggleButton = document.getElementById('MenuIcon');//   Assign button to a variable "ID"
const NavBarList = document.getElementById('NavList'); //Second variable for navbar list
  toggleButton.addEventListener('click', function() {
    NavBarList.classList.toggle('active');
}) //Now we need an event listener for when user clicks the menu icon, once clicked, run function, selecting and toggle our active class for navlist (hidden in media screen settings)
