const container = document.getElementById('container');
const buttonDiv = document.getElementById('button');

let myLibrary = [];

function Book(title, author, pageCount, status) {

   this.title = title;
   this.author = author;
   this.pageCount = pageCount;
   this.status = status;
}

function addBookToLibrary() {   

    const newBook = new Book('The Shining', 'Stephen King', 470, true);

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
        console.log(myLibrary);
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

buttonDiv.onclick = (e) => addBookToLibrary();