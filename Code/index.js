window.onscroll = function() {myFunction()};

var navbar = document.querySelector("#nav-bar");
let logoimg  = document.querySelector("#nav-bar-container01")
let barIcon = document.querySelector('.header-bar-icon1')
let navBarUl = document.querySelector("#nav-bar-ul")
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "white"
    navbar.style.height = "15vh"
    navbar.style.marginTop = "-10px"
    navbar.style.display = "flex"
    navbar.style.justifyContent  = "space-around";
    navbar.style.alignItems = "center";
    logoimg.style.marginTop = "0px"
    
    
  } else {
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = "#2e2c2c00" 

    navbar.style.height = "10vh"

    navbar.style.marginTop = "50px"
    navbar.style.display = "flex"
    navbar.style.justifyContent  = "space-around";
    navbar.style.alignItems = "start";
    logoimg.style.marginTop = "-35px"


  }
}


barIcon.addEventListener("click",displayul);

barIcon.addEventListener("dblclick",displayul1)

function displayul(){
      navBarUl.style.visibility = "inherit"
        
     }

function displayul1(){
        navBarUl.style.visibility = "hidden"
          
       }







// if (navBarUl.style.visibility == "hidden"){

//     function displayul(){
//         navBarUl.style.visibility = "inherit"
    
//     }
// }else{
//     function displayul(){
//         navBarUl.style.visibility = "hidden"
    
//     }
// }



