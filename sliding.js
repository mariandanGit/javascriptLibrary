const slideMenu = document.getElementById("side-form");
const overlay = document.getElementById("overlay");

function slide(){
   slideMenu.classList.toggle("active");

   if(slideMenu.classList.contains("active")){
        slideMenu.style.width = "100%";
        //overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   }
   else{
        slideMenu.style.width = "80px";
        overlay.style.left = "80px";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        slideMenu.style.flexDirection = "row";
   }
}

slideMenu.addEventListener("mouseenter", slide);
slideMenu.addEventListener("mouseleave", slide);
