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

const table = document.getElementById("books-table");

let myLibrary = [];

function Book(title, author, pageCount, status) {

   this.title = title;
   this.author = author;
   this.pageCount = pageCount;
   this.status = status;
}

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
     overlay.style.zIndex = "0";
     overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function closeForm(){
     slidingMenu.classList.toggle("active");
     overlay.style.zIndex = "-1";
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

function createRow(t, a, p, s){

     var newRow = table.insertRow();

     var titleCell = newRow.insertCell();
     var authorCell = newRow.insertCell();
     var pageCountCell = newRow.insertCell();
     var statusCell = newRow.insertCell();
     var deleteCell = newRow.insertCell();

     var title = document.createTextNode(t);
     var author = document.createTextNode(a);
     var pageCount = document.createTextNode(p);
     var status = document.createTextNode(s);
     var deleteButton = document.createElement("i");
     deleteButton.classList.add("deleteButton", "fa", "fa-trash");

     statusCell.addEventListener('click', function(event){

          const clickedElement = event.target;
          if(clickedElement.textContent === "Read"){
               clickedElement.textContent = "Not read";
               myLibrary[clickedElement].status = "Not read";
          }
          else{ 
               clickedElement.textContent = "Read";  
               myLibrary[clickedElement].status = "Read";
          }
     });
     statusCell.addEventListener('mouseover', function(event){
          const clickedElement = event.target;
          clickedElement.style.cursor = "pointer";
     });

     deleteButton.addEventListener('click', function(event){

          const clickedElement = event.target;
          const tr = clickedElement.parentNode.parentNode.rowIndex - 1;
          table.deleteRow(tr + 1);
          myLibrary.splice(tr, 1);
     });
     deleteCell.addEventListener('mouseover', function(event){
          const clickedElement = event.target;
          clickedElement.style.cursor = "pointer";
     });

     titleCell.appendChild(title);
     authorCell.appendChild(author);
     pageCountCell.appendChild(pageCount);
     statusCell.appendChild(status);
     deleteCell.appendChild(deleteButton);

     const newBook = new Book(title, author, pageCount, status);
     myLibrary.push(newBook);
}

function addRow(){

     var newRow = table.insertRow();

     var titleCell = newRow.insertCell();
     var authorCell = newRow.insertCell();
     var pageCountCell = newRow.insertCell();
     var statusCell = newRow.insertCell();
     var deleteCell = newRow.insertCell();

     var title = document.createTextNode(titleInput.value);
     var author = document.createTextNode(authorInput.value);
     var pageCount = document.createTextNode(pageInput.value);
     var status = "";
     var deleteButton = document.createElement("i");
     deleteButton.classList.add("deleteButton", "fa", "fa-trash");
     
     if(checkBox.checked){
          status = document.createTextNode("Read");
     }
     else status = document.createTextNode("Not read");

     statusCell.addEventListener('click', function(event){

          const clickedElement = event.target;
          if(clickedElement.textContent === "Read"){
               clickedElement.textContent = "Not read";
               myLibrary[clickedElement].status = "Not read";
          }
          else{ 
               clickedElement.textContent = "Read";  
               myLibrary[clickedElement].status = "Read";
          }
     });
     statusCell.addEventListener('mouseover', function(event){
          const clickedElement = event.target;
          clickedElement.style.cursor = "pointer";
     });

     deleteButton.addEventListener('click', function(event){

          const clickedElement = event.target;
          const tr = clickedElement.parentNode.parentNode.rowIndex - 1;
          table.deleteRow(tr + 1);
          myLibrary.splice(tr, 1);
     });
     deleteCell.addEventListener('mouseover', function(event){
          const clickedElement = event.target;
          clickedElement.style.cursor = "pointer";
     });

     titleCell.appendChild(title);
     authorCell.appendChild(author);
     pageCountCell.appendChild(pageCount);
     statusCell.appendChild(status);
     deleteCell.appendChild(deleteButton);

     const newBook = new Book(title, author, pageCount, status);
     myLibrary.push(newBook);
}

function addBook(){
     if(validateInputs()){

          addRow();

          inputs.forEach(element => {
               clearInput(element);
          });
          checkBox.checked = false;

          closeForm();
     }
}
createRow("The Shining","Stephen King", 511, "Read");
createRow("These Truths","Jill Lepore", 915, "Read");
createRow("Into The Wild","John Krakauer", 310, "Read");
createRow("Room Full of Mirrors","Charles R. Cross", 453, "Read");

openButton.addEventListener("click", openForm);
cancelButton.addEventListener("click", closeForm);
addButton.addEventListener("click", addBook);
