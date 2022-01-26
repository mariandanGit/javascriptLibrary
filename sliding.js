const slideMenu = document.getElementById("side-form");
const actualForm = document.getElementById("form");
const overlay = document.getElementById("overlay");
const cancelButton = document.getElementById("cancel-button");

var flag = false;

function slideHorizontally(){
   slideMenu.classList.toggle("active");

   if(slideMenu.classList.contains("active")){

     slideMenu.removeEventListener("click", slideHorizontally);
     checkWindowSize();

     slideMenu.style.width = "100%";
     slideMenu.style.height = "100vh";
     overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
     actualForm.style.display = "flex";
   }
   else{

     slideMenu.style.width = "80px";
     slideMenu.style.height = "100vh";
     overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
     slideMenu.style.flexDirection = "row";
     actualForm.style.display = "none";
   }
}

function slideVertically(){
     slideMenu.classList.toggle("active");
  
     if(slideMenu.classList.contains("active")){
          slideMenu.style.height = "100%";
          slideMenu.style.width = "100%";
          actualForm.style.display = "flex";
     }
     else{
          slideMenu.style.width = "100%";
          slideMenu.style.height = "80px";
          actualForm.style.display = "none";
     }
}

function checkWindowSize(){
     if(window.innerWidth <= 800){

          slideMenu.style.width = "100%";
          slideMenu.style.height = "80px";
          actualForm.style.display = "none";
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

          slideMenu.removeEventListener("click", slideHorizontally);
          slideMenu.addEventListener("click", slideVertically);
     }
     else{

          slideMenu.style.width = "80px";
          slideMenu.style.height = "100vh";
          actualForm.style.display = "none";

          slideMenu.removeEventListener("click", slideVertically);
          slideMenu.addEventListener("click", slideHorizontally);
     }
}

checkWindowSize();
window.addEventListener("resize", checkWindowSize);