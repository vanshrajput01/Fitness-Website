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


// Anchor tag style


let anchor1 = document.querySelector("#Aabout")
let anchor2 = document.querySelector("#Aservices")
let anchor3 = document.querySelector("#Aschedule")
let anchor4 = document.querySelector("#Atrainer")
let anchor5 = document.querySelector("#Acontact")


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


// anchor tag logic

anchor1.addEventListener("click",anchor1func)
anchor2.addEventListener("click",anchor2func)
anchor3.addEventListener("click",anchor3func)
anchor4.addEventListener("click",anchor4func)
anchor5.addEventListener("click",anchor5func)

function anchor1func(){
  anchor1.style.backgroundColor = "red"
  anchor1.style.color = "white"
  anchor1.style.padding =  "8px 10px"
  anchor1.style.border = "1px solid red"

  anchor2.style.backgroundColor = "white"
  anchor2.style.color = "red"
  anchor2.style.border = "1px solid white"

  anchor3.style.backgroundColor = "white"
  anchor3.style.color = "red"
  anchor3.style.border = "1px solid white"

  anchor4.style.backgroundColor = "white"
  anchor4.style.color = "red"
  anchor4.style.border = "1px solid white"

  anchor5.style.backgroundColor = "white"
  anchor5.style.color = "red"
  anchor5.style.border = "1px solid white"
  
}


function anchor2func(){

  anchor1.style.backgroundColor = "white"
  anchor1.style.color = "red"
  anchor1.style.border = "1px solid white"

  anchor2.style.backgroundColor = "red"
  anchor2.style.color = "white"
  anchor2.style.padding =  "8px 10px"
  anchor2.style.border = "1px solid red"

  anchor3.style.backgroundColor = "white"
  anchor3.style.color = "red"
  anchor3.style.border = "1px solid white"

  anchor4.style.backgroundColor = "white"
  anchor4.style.color = "red"
  anchor4.style.border = "1px solid white"

  anchor5.style.backgroundColor = "white"
  anchor5.style.color = "red"
  anchor5.style.border = "1px solid white"
  
}


function anchor3func(){
  anchor1.style.backgroundColor = "white"
  anchor1.style.color = "red"
  anchor1.style.border = "1px solid white"

  anchor2.style.backgroundColor = "white"
  anchor2.style.color = "red"
  anchor2.style.border = "1px solid white"

  anchor3.style.backgroundColor = "red"
  anchor3.style.color = "white"
  anchor3.style.padding =  "8px 10px"
  anchor3.style.border = "1px solid red"

  anchor4.style.backgroundColor = "white"
  anchor4.style.color = "red"
  anchor4.style.border = "1px solid white"

  anchor5.style.backgroundColor = "white"
  anchor5.style.color = "red"
  anchor5.style.border = "1px solid white"
  
}


function anchor4func(){
  anchor1.style.backgroundColor = "white"
  anchor1.style.color = "red"
  anchor1.style.border = "1px solid white"

  anchor2.style.backgroundColor = "white"
  anchor2.style.color = "red"
  anchor2.style.border = "1px solid white"

  anchor3.style.backgroundColor = "white"
  anchor3.style.color = "red"
  anchor3.style.border = "1px solid white"

  anchor4.style.backgroundColor = "red"
  anchor4.style.color = "white"
  anchor4.style.padding =  "8px 10px"
  anchor4.style.border = "1px solid red"

  anchor5.style.backgroundColor = "white"
  anchor5.style.color = "red"
  anchor5.style.border = "1px solid white"
  
}

function anchor5func(){
  anchor1.style.backgroundColor = "white"
  anchor1.style.color = "red"
  anchor1.style.border = "1px solid white"

  anchor2.style.backgroundColor = "white"
  anchor2.style.color = "red"
  anchor2.style.border = "1px solid white"

  anchor3.style.backgroundColor = "white"
  anchor3.style.color = "red"
  anchor3.style.border = "1px solid white"

  anchor4.style.backgroundColor = "white"
  anchor4.style.color = "red"
  anchor4.style.border = "1px solid white"

  anchor5.style.backgroundColor = "red"
  anchor5.style.color = "white"
  anchor5.style.padding =  "8px 10px"
  anchor5.style.border = "1px solid red"
  
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
  Schedule1.style.visibility = "hidden"
  Schedule2.style.visibility = "hidden"

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
  Schedule1.style.visibility = "hidden"
  Schedule2.style.visibility = "hidden"

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
  Schedule1.style.visibility = "hidden"
  Schedule2.style.visibility = "hidden"

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
  Schedule1.style.visibility = "hidden"
  Schedule2.style.visibility = "hidden"

}












