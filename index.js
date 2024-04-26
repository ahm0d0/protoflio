
const button = document.querySelector(".night");

let mode = document.querySelector("#Mood")
console.log(mode);

button.addEventListener("click", (event) => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if(element.className == "dark-mode"){
    console.log("done");
    mode.className = "fa-solid fa-sun"
  }else{
    mode.className = "fa-solid fa-moon"
  }
});