const myLibrary = [];

function Book(id, title, author, pages, read) {
    if (!new.target) {
        throw Error("Use new to call the constructor.");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return(`ID - ${this.id} | ${this.title} by ${this.author}, ${this.pages} pages, ${(this.read === true) ? "read" : "not read yet"}`);
    // };
};

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
};

const libraryDiv = document.querySelector("#library");
function appendBook() {
    libraryDiv.replaceChildren();

    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = book.pages;
        card.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = book.read;
        card.appendChild(read);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        card.appendChild(deleteButton);

        card.dataset.bookId = book.id;
        
        libraryDiv.appendChild(card);
    
        deleteButton.addEventListener("click", deleteButtonClick);

        function deleteButtonClick(e) {
            console.log(book.id);
            const index = myLibrary.findIndex(book => book.id === card.dataset.bookId);
            myLibrary.splice(index, 1);
            appendBook();
        };
    };
};

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", buttonClick);
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
function buttonClick(e) {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const read = readInput.checked;

    addBookToLibrary(title, author, pages, read);
    appendBook();
};
