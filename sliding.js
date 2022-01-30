const overlay = document.getElementById("overlay");
const slidingMenu = document.getElementById("side-form");
const openButton = document.getElementById("open-button");
const cancelButton = document.getElementById("cancel-button");
const addButton = document.getElementById("submit-button");

const titleInput = document.forms["form"]["title-input"];
const authorInput = document.forms["form"]["author-input"];
const pageInput = document.forms["form"]["page-input"];
const checkBox = document.forms["form"]["status-input"];

const inputs = document.querySelectorAll("input");

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function openForm(){
     slidingMenu.classList.toggle("active");
     overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function closeForm(){
     slidingMenu.classList.toggle("active");
     overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

     inputs.forEach(element => {
          clearInput(element);
     });
     checkBox.checked = false;
}

function clearInput(input){
     input.value = "";
     input.style.borderBottom = "";
}

function positiveInteger(str) {
     return /^([1-9]\d*)$/.test(str);
 }

function validateInputs(){

     if(titleInput.value === "" || titleInput.style.borderBottom == "2px solid rgb(224, 64, 77)"){ 
          titleInput.value = "Enter a title!";
          titleInput.style.borderBottom = "2px solid rgb(224, 64, 77)";

          titleInput.addEventListener("click", function(){
               clearInput(titleInput);
          })
     }
     else if(authorInput.value === "" || authorInput.style.borderBottom == "2px solid rgb(224, 64, 77)"){
          authorInput.value = "Enter an author!";
          authorInput.style.borderBottom = "2px solid rgb(224, 64, 77)";

          authorInput.addEventListener("click", function(){
               clearInput(authorInput);
          })
     }
     else if(pageInput.value === "" || pageInput.style.borderBottom === "2px solid rgb(224, 64, 77)"){
          pageInput.value = "Enter page count!";
          pageInput.style.borderBottom = "2px solid rgb(224, 64, 77)";

          pageInput.addEventListener("click", function(){
               clearInput(pageInput);
          })
     }
     else if(!positiveInteger(pageInput.value)){
          pageInput.value = "Page count is a positive number!";
          pageInput.style.borderBottom = "2px solid rgb(224, 64, 77)";

          pageInput.addEventListener("click", function(){
               clearInput(pageInput);
          })
     }
     else return 1;
}

function addBook(){
     if(validateInputs()){
          
     }
}

openButton.addEventListener("click", openForm);
cancelButton.addEventListener("click", closeForm);
addButton.addEventListener("click", addBook);
