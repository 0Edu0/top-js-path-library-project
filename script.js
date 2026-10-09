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

