const features = document.querySelector("#features");
const menu = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".side-bar")
const nav = document.querySelector(".nav");
const closez = document.querySelector(".close-icon");
const log_reg = document.querySelector(".login-register");
menu.addEventListener("click",()=>{
    sidebar.classList.add("active");
    nav.classList.add("active");
    menu.classList.remove("active");
    closez.classList.add("active");
    log_reg.classList.add("active");
})

closez.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    nav.classList.remove("active");
    menu.classList.add("active");
    closez.classList.remove("active"); 
    log_reg.classList.remove("active");  
})

const featureDown = document.querySelector(".dropdown-arrow1");
const featureUp = document.querySelector(".dropup-arrow1");

const featureDrop = document.querySelector(".features-dropdown-options");

const companyDown = document.querySelector(".dropdown-arrow2");
const companyUp = document.querySelector(".dropup-arrow2");  

const companyDrop =document.querySelector(".company-dropdown-options");

featureDown.addEventListener("click",()=>{
    featureDrop.classList.add("active");
    featureDown.classList.add("active");
    featureUp.classList.add("active");
})

featureUp.addEventListener("click",()=>{
    featureDrop.classList.remove("active");
    featureDown.classList.remove("active");
    featureUp.classList.remove("active");
})


companyDown.addEventListener("click",()=>{
    companyDrop.classList.add("active");
    companyDown.classList.add("active");
    companyUp.classList.add("active");
})

companyUp.addEventListener("click",()=>{
    companyDrop.classList.remove("active");
    companyDown.classList.remove("active");
    companyUp.classList.remove("active");
})
