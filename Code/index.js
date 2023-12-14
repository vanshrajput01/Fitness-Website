const mobile_nav = document.querySelector('.mobile-navbar-btn')
const navHeader = document.querySelector('.header');

const toggleNavBar = () =>{

  navHeader.classList.toggle("active")
  
};

mobile_nav.addEventListener("click",()=> toggleNavBar());



window.onscroll = function() {myFunction()};

var navbar = document.querySelector("#nav-bar");
let logoimg  = document.querySelector("#nav-bar-container01")
let barIcon = document.querySelector('.header-bar-icon1')
let navBarUl = document.querySelector("#nav-bar-ul")
var sticky = navbar.offsetTop;

// Fitness Schedule logic

let day01 = document.querySelector("#day01")
let day02 = document.querySelector("#day02")
let day03 = document.querySelector("#day03")


let day04 = document.querySelector("#day04")
let day05 = document.querySelector("#day05")
let day06 = document.querySelector("#day06")
let day07 = document.querySelector("#day07")


let Schedule1 = document.querySelector("#Fitness-Schedule-container03-01")
let Schedule2 = document.querySelector("#Fitness-Schedule-container03-02")



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











day01.addEventListener("click",schedule1fun)

day02.addEventListener("click",schedule2fun)

day03.addEventListener("click",schedule3fun)


day04.addEventListener("click",schedule4fun)

day05.addEventListener("click",schedule5fun)

day06.addEventListener("click",schedule6fun)

day07.addEventListener("click",schedule7fun)


function schedule1fun(){
  day03.style.backgroundColor = "white"
  day03.style.color = "red"
  day01.style.backgroundColor = "red"
  day01.style.color = "white"
  day02.style.backgroundColor = "white"
  day02.style.color = "red"
  day04.style.backgroundColor = "white"
  day04.style.color = "red"
  day05.style.backgroundColor = "white"
  day05.style.color = "red"
  day06.style.backgroundColor = "white"
  day06.style.color = "red"
  day07.style.backgroundColor = "white"
  day07.style.color = "red"
  

  Schedule1.style.visibility = "inherit"
  Schedule2.style.visibility = "hidden"

  

}





function schedule2fun(){
  day03.style.backgroundColor = "white"
  day03.style.color = "red"
  day01.style.backgroundColor = "white"
  day01.style.color = "red"
  day02.style.backgroundColor = "red"
  day02.style.color = "white"
  day04.style.backgroundColor = "white"
  day04.style.color = "red"
  day05.style.backgroundColor = "white"
  day05.style.color = "red"
  day06.style.backgroundColor = "white"
  day06.style.color = "red"
  day07.style.backgroundColor = "white"
  day07.style.color = "red"
  Schedule2.style.marginTop = "-130px"
  Schedule1.style.visibility = "hidden"
  

  Schedule2.style.visibility = "inherit"


}

function schedule3fun(){
  day01.style.backgroundColor = "white"
  day01.style.color = "red"
  day02.style.backgroundColor = "white"
  day02.style.color = "red"
  day03.style.backgroundColor = "red"
  day03.style.color = "white"
  day04.style.backgroundColor = "white"
  day04.style.color = "red"
  day05.style.backgroundColor = "white"
  day05.style.color = "red"
  day06.style.backgroundColor = "white"
  day06.style.color = "red"
  day07.style.backgroundColor = "white"
  day07.style.color = "red"
  

  Schedule2.style.marginTop = "30px"

  Schedule1.style.visibility = "inherit"
  Schedule2.style.visibility = "inherit"
}



function schedule4fun(){
  day01.style.backgroundColor = "white"
  day01.style.color = "red"
  day02.style.backgroundColor = "white"
  day02.style.color = "red"
  day03.style.backgroundColor = "white"
  day03.style.color = "red"
  day04.style.backgroundColor = "red"
  day04.style.color = "white"
  day05.style.backgroundColor = "white"
  day05.style.color = "red"
  day06.style.backgroundColor = "white"
  day06.style.color = "red"
  day07.style.backgroundColor = "white"
  day07.style.color = "red"

}



function schedule5fun(){
  day01.style.backgroundColor = "white"
  day01.style.color = "red"
  day02.style.backgroundColor = "white"
  day02.style.color = "red"
  day03.style.backgroundColor = "white"
  day03.style.color = "red"
  day04.style.backgroundColor = "white"
  day04.style.color = "red"
  day05.style.backgroundColor = "red"
  day05.style.color = "white"
  day06.style.backgroundColor = "white"
  day06.style.color = "red"
  day07.style.backgroundColor = "white"
  day07.style.color = "red"

}



function schedule6fun(){
  day01.style.backgroundColor = "white"
  day01.style.color = "red"
  day02.style.backgroundColor = "white"
  day02.style.color = "red"
  day03.style.backgroundColor = "white"
  day03.style.color = "red"
  day04.style.backgroundColor = "white"
  day04.style.color = "red"
  day05.style.backgroundColor = "white"
  day05.style.color = "red"
  day06.style.backgroundColor = "red"
  day06.style.color = "white"
  day07.style.backgroundColor = "white"
  day07.style.color = "red"

}




function schedule7fun(){
  day01.style.backgroundColor = "white"
  day01.style.color = "red"
  day02.style.backgroundColor = "white"
  day02.style.color = "red"
  day03.style.backgroundColor = "white"
  day03.style.color = "red"
  day04.style.backgroundColor = "white"
  day04.style.color = "red"
  day05.style.backgroundColor = "white"
  day05.style.color = "red"
  day06.style.backgroundColor = "white"
  day06.style.color = "red"
  day07.style.backgroundColor = "red"
  day07.style.color = "white"

}












