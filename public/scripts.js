var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;

    if(counter>4){
        counter = 1;
    }
},5000)


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const pageBody = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    pageBody.classList.toggle("nav-open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        pageBody.classList.remove("nav-open");
    }
});