var loginSwitch = document.querySelector("#login");
var signupSwitch = document.querySelector("#signup");
var overlay = document.querySelector(".overlay");

signupSwitch.addEventListener("click",()=>{
    overlay.classList.add("signup");
    overlay.classList.remove("login");
    console.log("working");
});
loginSwitch.addEventListener("click",()=>{
    overlay.classList.remove("signup");
    overlay.classList.add("login"); 
});