const myLibrary = [];

function Book(id, title, author, pages, read) {
    if(!new.target){
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

addBookToLibrary("testTitle", "testAuthor", 100, true);
addBookToLibrary("testTitle2", "testAuthor2", 200, true);
addBookToLibrary("testTitle3", "testAuthor3", 300, false);


const libraryDiv = document.querySelector("#library");

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

    libraryDiv.appendChild(card);
}