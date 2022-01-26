const container = document.getElementById("container");
const buttonDiv = document.getElementById("button");
const popUp = document.getElementById("popUpDiv");
const submitButton = document.getElementById("stubmitButton");
const form = document.getElementById("form");
const titleInput =  document.getElementById("titleInput");
const authorInput =  document.getElementById("authorInput");
const pagesInput =  document.getElementById("pageInput");
const checkboxInput =  document.getElementById("checkbox");

let myLibrary = [];

function Book(title, author, pageCount, status) {

   this.title = title;
   this.author = author;
   this.pageCount = pageCount;
   this.status = status;
}

function addBookToLibrary(t, a, p, r) {   

    const newBook = new Book(t, a, p, r);

    myLibrary.push(newBook);

    var bookDiv = document.createElement('div');
    var title = document.createElement('h3');
    var author = document.createElement('h3');
    var pageCount = document.createElement('h3');
    var checkBox = document.createElement('input');
    var deleteButton = document.createElement('button');

    bookDiv.className = 'bookDiv';
    title.textContent = newBook.title;
    author.textContent = newBook.author;
    pageCount.textContent = newBook.pageCount;
    checkBox.type = 'checkbox';
    deleteButton.textContent = 'Delete book';

    deleteButton.addEventListener('click', function(event){

        const clickedElement = event.target;
        const index = clickedElement.value;
        myLibrary.splice(index, 1);
        container.removeChild(bookDiv);
    });

    container.appendChild(bookDiv);
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pageCount);
    bookDiv.appendChild(checkBox);
    bookDiv.appendChild(deleteButton);
    console.log(myLibrary);
}

function openPopUp(){
    popUp.style.height = "300px";
    popUp.style.width = "300px";
    form.style.display = "flex";

    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function submitFunction(){

    addBookToLibrary(titleInput.textContent, authorInput.textContent, pagesInput.textContent, checkboxInput.value);
}

buttonDiv.onclick = (e) => openPopUp();
submitButton.addEventListener("click", submitFunction);